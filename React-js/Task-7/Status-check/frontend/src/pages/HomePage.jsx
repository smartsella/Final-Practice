import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import GetUserForm from "../components/GetUserForm";
import SearchUserForm from "../components/SearchUserForm";
import StudentForm from "../components/StudentForm";

function HomePage() {
  return (
    <main>
      <h1 className="page-title">Status Check MERN App</h1>
      <div className="form-grid">
        <RegisterForm />
        <LoginForm />
        <GetUserForm />
        <SearchUserForm />
        <StudentForm />
      </div>
    </main>
  );
}

export default HomePage;
