import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", pw: "", pwCheck: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const pwError =
    form.pwCheck && form.pw !== form.pwCheck ? "비밀번호가 일치하지 않습니다" : "";

  const isValid =
    form.name && form.email && form.pw && form.pw === form.pwCheck;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <p className="mb-2 title-sm text-primary-600">회원가입</p>

        <Input
        label="NAME"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="EMAIL"
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        label="PASSWORD"
        id="pw"
        name="pw"
        type="password"
        value={form.pw}
        onChange={handleChange}
      />
      <Input
        label="PASSWORD CONFIRMATION"
        id="pwCheck"
        name="pwCheck"
        type="password"
        value={form.pwCheck}
        onChange={handleChange}
        error={pwError}
      />

      <Button text={"회원가입"} onClick={() => window.alert('회원 가입이 완료되었습니다.')} disabled={!isValid} />

      </div>
      
    </main>
  );
}