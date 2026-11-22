
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
            string ConStr = ConfigurationManager.ConnectionStrings["ConStr"].ConnectionString;

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

                cmd.Parameters.AddWithValue("p_Sid",
                    Sid.HasValue ? (object)Sid.Value : DBNull.Value);

                cmd.Parameters.AddWithValue("p_Status",
                    Status.HasValue ? (object)Status.Value : DBNull.Value);

                con.Open();

                using (MySqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Student student = new Student();

                        student.Sid = Convert.ToInt32(dr["Sid"]);
                        student.Name = Convert.ToString(dr["Name"]);
                        student.Class = Convert.ToInt32(dr["Class"]);
                        student.Fees = Convert.ToDecimal(dr["Fees"]);
                        student.Photo = Convert.ToString(dr["Photo"]);

                        students.Add(student);
                    }
                }
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
