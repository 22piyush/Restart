using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;

namespace MVCWithADO.Models
{
    public class StudentDal
    {
        private readonly string connectionString;

        public StudentDal()
        {
            ConnectionStringSettings settings = ConfigurationManager.ConnectionStrings["ConStr"];

            if (settings == null || string.IsNullOrWhiteSpace(settings.ConnectionString))
            {
                throw new ConfigurationErrorsException("The ConStr connection string is missing.");
            }

            connectionString = settings.ConnectionString;
        }

        public List<Student> SelectStudent(int? sid, bool? status)
        {
            List<Student> students = new List<Student>();

            using (MySqlConnection connection = CreateConnection())
            using (MySqlCommand command = CreateCommand(connection, "Student_Select"))
            {
                command.Parameters.Add("p_Sid", MySqlDbType.Int32).Value =
                    sid.HasValue ? (object)sid.Value : DBNull.Value;
                command.Parameters.Add("p_Status", MySqlDbType.Bit).Value =
                    status.HasValue ? (object)status.Value : DBNull.Value;

                connection.Open();

                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        students.Add(MapStudent(reader));
                    }
                }
            }

            return students;
        }

        public bool InsertStudent(Student student)
        {
            if (student == null)
            {
                throw new ArgumentNullException("student");
            }

            using (MySqlConnection connection = CreateConnection())
            using (MySqlCommand command = CreateCommand(connection, "Student_Insert"))
            {
                AddStudentParameters(command, student);
                command.Parameters.Add("p_Status", MySqlDbType.Bit).Value = true;

                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
        }

        public bool UpdateStudent(Student student)
        {
            if (student == null)
            {
                throw new ArgumentNullException("student");
            }

            using (MySqlConnection connection = CreateConnection())
            using (MySqlCommand command = CreateCommand(connection, "Student_Update"))
            {
                command.Parameters.Add("p_Sid", MySqlDbType.Int32).Value = student.Sid;
                AddStudentParameters(command, student);

                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
        }

        public bool DeleteStudent(int sid)
        {
            using (MySqlConnection connection = CreateConnection())
            using (MySqlCommand command = CreateCommand(connection, "Student_Delete"))
            {
                command.Parameters.Add("p_Sid", MySqlDbType.Int32).Value = sid;

                connection.Open();

                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    do
                    {
                        for (int columnIndex = 0; columnIndex < reader.FieldCount; columnIndex++)
                        {
                            if (!string.Equals(reader.GetName(columnIndex), "AffectedRows", StringComparison.OrdinalIgnoreCase))
                            {
                                continue;
                            }

                            return reader.Read()
                                && !reader.IsDBNull(columnIndex)
                                && Convert.ToInt32(reader.GetValue(columnIndex)) > 0;
                        }
                    }
                    while (reader.NextResult());
                }

                return false;
            }
        }

        private MySqlConnection CreateConnection()
        {
            return new MySqlConnection(connectionString);
        }

        private static MySqlCommand CreateCommand(MySqlConnection connection, string procedureName)
        {
            return new MySqlCommand(procedureName, connection)
            {
                CommandType = CommandType.StoredProcedure
            };
        }

        private static void AddStudentParameters(MySqlCommand command, Student student)
        {
            command.Parameters.Add("p_Name", MySqlDbType.VarChar, 50).Value =
                (object)student.Name ?? DBNull.Value;
            command.Parameters.Add("p_Class", MySqlDbType.Int32).Value =
                student.Class.HasValue ? (object)student.Class.Value : DBNull.Value;
            command.Parameters.Add("p_Fees", MySqlDbType.Decimal).Value =
                student.Fees.HasValue ? (object)student.Fees.Value : DBNull.Value;
            command.Parameters.Add("p_Photo", MySqlDbType.VarChar, 100).Value =
                string.IsNullOrWhiteSpace(student.Photo) ? (object)string.Empty : student.Photo;
        }

        private static Student MapStudent(IDataRecord record)
        {
            return new Student
            {
                Sid = Convert.ToInt32(record["Sid"]),
                Name = record["Name"] == DBNull.Value ? null : Convert.ToString(record["Name"]),
                Class = record["Class"] == DBNull.Value ? (int?)null : Convert.ToInt32(record["Class"]),
                Fees = record["Fees"] == DBNull.Value ? (decimal?)null : Convert.ToDecimal(record["Fees"]),
                Photo = record["Photo"] == DBNull.Value ? null : Convert.ToString(record["Photo"])
            };
        }
    }
}