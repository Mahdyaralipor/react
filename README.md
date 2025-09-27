# آموزش جامع ری‌اکت (React) از صفر تا صد - هماهنگ با دوره راکت

این فایل مارک‌داون به شما کمک می‌کند تا با استفاده از سرفصل‌های دوره رایگان **راکت**، کتابخانه **ری‌اکت (React)** را به صورت پروژه‌محور از پایه تا پیشرفته یاد بگیرید. این آموزش برای افرادی طراحی شده که با جاوااسکریپت آشنا هستند و می‌خواهند وب‌سایت‌های تک‌صفحه‌ای (SPA) را به سادگی بسازند.

---

## مقدمه

### ری‌اکت چیست؟
ری‌اکت یک کتابخانه جاوااسکریپت متن‌باز است که برای ساخت رابط‌های کاربری تعاملی، به‌ویژه وب‌سایت‌های تک‌صفحه‌ای (SPA)، استفاده می‌شود. ویژگی‌های کلیدی:
- **کامپوننت‌محور**: رابط کاربری به کامپوننت‌های کوچک و قابل استفاده مجدد تقسیم می‌شود.
- **DOM مجازی**: برای بهبود عملکرد و سرعت رندر.
- **جریان داده یک‌طرفه**: داده‌ها از والد به فرزند منتقل می‌شوند.

### پیش‌نیازها
- **جاوااسکریپت (ES6+)**: مفاهیم مانند Arrow Functions، Destructuring، Spread Operator، و Modules.
- **HTML و CSS**: برای ساختار و استایل‌دهی.
- **Node.js و npm**: برای مدیریت پروژه و نصب پکیج‌ها.
- پیشنهاد: اگر با جاوااسکریپت آشنا نیستید، ابتدا دوره آموزش جاوااسکریپت راکت را مطالعه کنید.

### هدف دوره
این آموزش شما را با مفاهیم اولیه و کاربردی ری‌اکت آشنا می‌کند و با پیاده‌سازی یک پروژه عملی (مانند لیست وظایف) به شما کمک می‌کند تا دانش خود را به صورت عملی به کار ببرید.

---

## سرفصل‌های دوره (بر اساس دوره راکت)

### 1. نصب و راه‌اندازی

#### ابزارهای مورد نیاز
- **Node.js**: نسخه پایدار (LTS) را از [nodejs.org](https://nodejs.org) نصب کنید.
- **Create React App**: ابزاری برای ایجاد سریع پروژه‌های ری‌اکت.

#### ایجاد پروژه
1. ترمینال را باز کنید و دستور زیر را اجرا کنید:
```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```
2. مرورگر شما به صورت خودکار به آدرس `http://localhost:3000` باز می‌شود.

#### ساختار پروژه
- **`src/`**: شامل فایل‌های اصلی پروژه (مانند `App.js` و `index.js`).
- **`public/`**: فایل‌های استاتیک مثل `index.html`.
- **`package.json`**: مدیریت وابستگی‌ها و اسکریپت‌ها.

#### نکات:
- از ابزارهایی مثل **VS Code** برای ویرایش کد استفاده کنید.
- افزونه‌های مفیدی مثل **ESLint** و **Prettier** را نصب کنید تا کدهای تمیزتری بنویسید.

---

### 2. آشنایی با موارد پایه و سینتکس

#### JSX چیست؟
JSX یک سینتکس شبیه HTML است که به شما امکان می‌دهد رابط کاربری را به صورت декларатив تعریف کنید. JSX در نهایت به جاوااسکریپت تبدیل می‌شود.

#### مثال:
```jsx
const element = <h1>سلام، دنیا!</h1>;
```

#### اولین کامپوننت
کامپوننت‌ها بلوک‌های سازنده ری‌اکت هستند. بیایید یک کامپوننت ساده بسازیم:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>سلام، {props.name}!</h1>;
}

export default Welcome;
```

- این کامپوننت را در `App.js` استفاده کنید:
```jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="کاربر" />
    </div>
  );
}

export default App;
```

#### نکات سینتکس:
- از `{}` برای جاوااسکریپت داخل JSX استفاده کنید.
- ویژگی‌های HTML (مثل `class`) در JSX به `className` تغییر می‌کنند.
- کامپوننت‌ها باید یک عنصر والد داشته باشند (مثل `<div>` یا `<>`).

---

### 3. لیست‌ها و شروط

#### نمایش لیست‌ها
برای نمایش لیست‌ها، از متد `map` استفاده کنید و حتماً یک `key` منحصربه‌فرد به هر آیتم اضافه کنید.

#### مثال:
```jsx
function TodoList() {
  const todos = ['خرید', 'مطالعه', 'ورزش'];

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

#### شروط (Conditionals)
برای رندر شرطی، از عملگرهای منطقی (`&&`, `||`) یا شرط‌های سه‌گانه استفاده کنید.

#### مثال:
```jsx
function Status({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>خوش آمدید!</p> : <p>لطفاً وارد شوید.</p>}
    </div>
  );
}
```

#### نکات:
- برای لیست‌های بزرگ، از یک `key` منحصربه‌فرد (مثل ID) به جای `index` استفاده کنید.
- از شرط‌های پیچیده در JSX اجتناب کنید و منطق را به توابع جداگانه منتقل کنید.

---

### 4. استایل‌ها در کامپوننت‌ها

#### روش‌های استایل‌دهی
1. **CSS خام**:
   - یک فایل CSS (مثل `styles.css`) ایجاد کنید و در کامپوننت وارد کنید:
   ```jsx
   import './styles.css';

   function Button() {
     return <button className="btn">کلیک کن</button>;
   }
   ```
   ```css
   /* styles.css */
   .btn {
     background-color: #007bff;
     color: white;
     padding: 10px;
   }
   ```

2. **CSS-in-JS**:
   - از کتابخانه‌هایی مثل `styled-components` یا استایل‌های اینلاین استفاده کنید:
   ```jsx
   const buttonStyle = {
     backgroundColor: '#007bff',
     color: 'white',
     padding: '10px',
   };

   function Button() {
     return <button style={buttonStyle}>کلیک کن</button>;
   }
   ```

3. **فریمورک‌های CSS**:
   - **Tailwind CSS**: برای استایل‌دهی سریع و مدرن.
     ```bash
     npm install tailwindcss
     ```
     ```jsx
     function Button() {
       return (
         <button className="bg-blue-500 text-white p-2 rounded">
           کلیک کن
         </button>
       );
     }
     ```
   - **Bootstrap**: استفاده از بوت‌استرپ در ری‌اکت توصیه نمی‌شود مگر اینکه از نسخه‌های خاص (مثل `react-bootstrap`) استفاده کنید:
     ```bash
     npm install react-bootstrap bootstrap
     ```
     ```jsx
     import { Button } from 'react-bootstrap';
     import 'bootstrap/dist/css/bootstrap.min.css';

     function App() {
       return <Button variant="primary">کلیک کن</Button>;
     }
     ```

#### نکات:
- **Tailwind CSS** به دلیل انعطاف‌پذیری و سرعت در ری‌اکت محبوب‌تر است.
- از استایل‌های اینلاین برای موارد کوچک استفاده کنید، اما برای پروژه‌های بزرگ، CSS ماژولار یا Tailwind توصیه می‌شود.

---

### 5. پروژه لیست Todo

این پروژه به شما کمک می‌کند تا مفاهیم آموخته‌شده (State، Props، Lists، Events) را به صورت عملی پیاده‌سازی کنید.

#### ویژگی‌های پروژه:
- افزودن وظیفه جدید.
- علامت زدن وظیفه به عنوان کامل‌شده.
- حذف وظیفه.
- ذخیره وظایف در `localStorage`.

#### کد نمونه:
```jsx
import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // بارگذاری وظایف از localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // ذخیره وظایف در localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // افزودن وظیفه
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  // تغییر وضعیت وظیفه
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // حذف وظیفه
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">لیست وظایف</h2>
      <div className="flex mb-4">
        <input
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="وظیفه جدید"
        />
        <button
          className="bg-blue-500 text-white p-2 ml-2"
          onClick={addTodo}
        >
          اضافه کن
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button
              className="bg-red-500 text-white p-1"
              onClick={() => deleteTodo(index)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

#### توضیحات پروژه:
- **State**: از `useState` برای مدیریت ورودی و لیست وظایف استفاده شده.
- **Effect**: از `useEffect` برای ذخیره و بارگذاری وظایف در `localStorage` استفاده شده.
- **استایل‌دهی**: از Tailwind CSS برای استایل ساده و زیبا استفاده شده.
- **رویدادها**: مدیریت کلیک‌ها برای افزودن، حذف، و تغییر وضعیت وظایف.

#### تمرین:
- قابلیت فیلتر کردن وظایف (مثل نمایش فقط وظایف کامل‌شده) را اضافه کنید.
- امکان ویرایش وظایف را پیاده‌سازی کنید.

---

## مفاهیم تکمیلی (برای ادامه مسیر)

### 1. هوک‌ها (Hooks)
هوک‌ها به شما امکان استفاده از ویژگی‌های ری‌اکت در کامپوننت‌های تابعی را می‌دهند.

#### useState
برای مدیریت حالت‌های محلی:
```jsx
const [count, setCount] = useState(0);
```

#### useEffect
برای مدیریت چرخه حیات (مثل بارگذاری داده‌ها):
```jsx
useEffect(() => {
  document.title = `شمارنده: ${count}`;
}, [count]);
```

#### useContext
برای دسترسی به داده‌های سراسری:
```jsx
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>دکمه</button>;
}
```

### 2. مسیریابی (Routing)
برای ساخت برنامه‌های چندصفحه‌ای، از **React Router** استفاده کنید:
```bash
npm install react-router-dom
```
```jsx
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">خانه</Link> | <Link to="/about">درباره</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 3. مدیریت حالت پیشرفته
برای پروژه‌های بزرگ، از ابزارهایی مثل **Redux** یا **React Query** استفاده کنید:
- **Redux**: برای مدیریت حالت سراسری.
- **React Query**: برای مدیریت داده‌های سمت سرور (API).

---

## بازار کار و نکات پایانی

### بازار کار
- **تقاضا**: توسعه‌دهندگان ری‌اکت در ایران و جهان بسیار مورد نیاز هستند (فیسبوک، اینستاگرام، نتفلیکس).
- **فرصت‌ها**: کار در شرکت‌ها، فریلنسینگ، یا توسعه اپلیکیشن‌های موبایلی با **React Native**.
- **مدت یادگیری**: با تسلط به جاوااسکریپت، یادگیری ری‌اکت بین ۱ تا ۶ ماه طول می‌کشد.

### نکات کلیدی برای موفقیت
1. **تمرین پروژه‌محور**: پروژه‌های کوچک مثل لیست وظایف، وبلاگ، یا فروشگاه ساده بسازید.
2. **مطالعه مستندات**: از [react.dev](https://react.dev) برای یادگیری عمیق‌تر استفاده کنید.
3. **استفاده از ابزارهای مدرن**: با ابزارهایی مثل Tailwind CSS و React Router آشنا شوید.
4. **مشارکت در انجمن‌ها**: در پلتفرم‌هایی مثل [Stack Overflow](https://stackoverflow.com) و [X](https://x.com) سوالات خود را مطرح کنید.

### منابع پیشنهادی
- **مستندات رسمی**: [react.dev](https://react.dev)
- **دوره‌های راکت**: [roocket.ir](https://roocket.ir/series/learn-react-js)
- **آموزش‌های ویدیویی**: [freeCodeCamp](https://www.freecodecamp.org)، [Scrimba](https://scrimba.com)
- **کتابخانه‌های مکمل**:
  - **React Router**: برای مسیریابی.
  - **Axios**: برای درخواست‌های HTTP.
  - **Tailwind CSS**: برای استایل‌دهی.

---

## سوالات متداول (بر اساس دوره راکت)

### آیا این دوره برای یادگیری ری‌اکت کافی است؟
بله، دوره راکت حدود ۹۰٪ از مفاهیم مورد نیاز برای کار با ری‌اکت را پوشش می‌دهد. با تکمیل پروژه‌های عملی و مطالعه مستندات، می‌توانید به سطح حرفه‌ای برسید.

### آیا یادگیری ری‌اکت سخت است؟
اگر با جاوااسکریپت (ES6+) آشنا باشید، یادگیری ری‌اکت ساده است. مشکلات معمولاً به دلیل ضعف در جاوااسکریپت به وجود می‌آیند.

### آیا ری‌اکت ارزش یادگیری دارد؟
بله، با توجه به تقاضای بالای بازار کار و استفاده گسترده در شرکت‌های بزرگ، یادگیری ری‌اکت سرمایه‌گذاری ارزشمندی است.

### در چه پروژه‌هایی می‌توان از ری‌اکت استفاده کرد؟
ری‌اکت برای هر پروژه فرانت‌اند، به‌ویژه وب‌سایت‌های SPA، مناسب است. همچنین با **React Native** می‌توانید اپلیکیشن‌های موبایلی بسازید.

---

## پروژه پیشنهادی برای تمرین
علاوه بر پروژه لیست وظایف، می‌توانید پروژه‌های زیر را امتحان کنید:
1. **وبلاگ ساده**: با امکان افزودن/حذف پست‌ها.
2. **فروشگاه آنلاین**: نمایش محصولات و سبد خرید.
3. **برنامه آب‌وهوا**: با استفاده از API عمومی (مثل OpenWeatherMap).

---

این فایل مارک‌داون به شما کمک می‌کند تا با سرفصل‌های دوره راکت پیش بروید و ری‌اکت را به صورت اصولی یاد بگیرید. برای پشتیبانی و پرسش‌ها، می‌توانید به وب‌سایت [راکت](https://roocket.ir) مراجعه کنید یا در انجمن‌های برنامه‌نویسی فعال باشید. موفق باشید!