using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;

namespace MVCWithADO.Models
{
    public class StudentDal
    {
        MySqlConnection con;
        MySqlCommand cmd;

        public StudentDal()
        {
            string ConStr = ConfigurationManager
                .ConnectionStrings["ConStr"]
                .ConnectionString;

            con = new MySqlConnection(ConStr);
            cmd = new MySqlCommand();

            cmd.Connection = con;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

        }

        public List<Student> SelectStudent(int? Sid, bool? Status)
        {
            List<Student> students = new List<Student>();

            try
            {
                cmd.Parameters.Clear();
                cmd.CommandText = "Student_Select";

                cmd.Parameters.AddWithValue(
                    "@p_Sid",
                    Sid.HasValue ? (object)Sid.Value : DBNull.Value
                );

                cmd.Parameters.AddWithValue(
                    "@p_Status",
                    Status.HasValue ? (object)Status.Value : DBNull.Value
                );

                con.Open();

                MySqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Student student = new Student();

                    student.Sid = Convert.ToInt32(reader["Sid"]);
                    student.Name = reader["Name"].ToString();
                    student.Fees = Convert.ToDouble(reader["Fees"]);
                    student.Photo = reader["Photo"].ToString();

                    students.Add(student);
                }

                reader.Close();
            }
            catch (Exception ex)
            {
                throw;
            }
            finally
            {
                con.Close();
            }

            return students;
        }
    }
}