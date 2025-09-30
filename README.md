# Todo App

## Stack
- Frontend: Next.js, React, TypeScript, TailwindCSS
- Backend: Node.js (API routes in Next.js)
- Database: SQLite (for simplicity)
- ORM: Sequelize (if used)
- Deployment: Vercel / Netlify

## Installation
```bash
git clone <repo-url>
cd web-todo
npm install
npm run dev



---

### 3️⃣ Deploy แบบง่าย ๆ
#### Option 1: **Vercel** (แนะนำสำหรับ Next.js)
1. สมัครบัญชีฟรี: [vercel.com](https://vercel.com)
2. import โปรเจกต์จาก GitHub
3. Vercel จะ detect เป็น Next.js และ deploy ให้
4. ได้ URL ให้โชว์ผลงาน เช่น `https://web-todo.vercel.app`

#### Option 2: **Netlify**
- เหมาะกับ front-end (Next.js Static Export)
- `next build && next export` → deploy folder `out/`
- Netlify จะสร้าง URL ให้เหมือนกัน

---

### 4️⃣ ตรวจสอบ
- แอปทำงานได้ปกติ
- API ทุก route ทำงาน
- URL deploy ใช้โชว์ใน resume / interview

---

💡 **Tip:** สำหรับงานสัมภาษณ์ ถ้าอยากโดดเด่น:
- บอกว่าใช้ **Next.js API routes** สำหรับ backend
- แยก **components / services / utils** ให้โค้ด clean
- ถ้าใช้ **Sequelize** กับ SQLite หรือ Postgres จะดี
- URL deploy พร้อม demo ให้ interviewer ทดลองใช้งานได้เลย

---

ถ้าคุณอยาก ผมสามารถช่วยคุณ **เขียน README.md พร้อมตัวอย่างโค้ด API + วิธี deploy Vercel** แบบพร้อมใช้งานให้เลยครับ  

คุณอยากให้ผมทำตรงนี้ไหม?
