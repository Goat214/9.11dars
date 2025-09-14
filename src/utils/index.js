import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mlhwjzltcpfocmyhbsms.supabase.co/rest/v1/",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1saHdqemx0Y3Bmb2NteWhic21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NzExNTMsImV4cCI6MjA3MzI0NzE1M30.8HWFZKABQmo9a5_y3cHxBfjp4-yDsrCGzjlQti_7_aw", 
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1saHdqemx0Y3Bmb2NteWhic21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NzExNTMsImV4cCI6MjA3MzI0NzE1M30.8HWFZKABQmo9a5_y3cHxBfjp4-yDsrCGzjlQti_7_aw",
    "Content-Type": "application/json",
  },
});
