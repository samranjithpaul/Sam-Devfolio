# Sam-Devfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Custom-orange?style=for-the-badge)

[![GitHub Stars](https://img.shields.io/github/stars/samranjithpaul/Sam-Devfolio?style=social)](https://github.com/samranjithpaul/Sam-Devfolio)
[![GitHub Forks](https://img.shields.io/github/forks/samranjithpaul/Sam-Devfolio?style=social)](https://github.com/samranjithpaul/Sam-Devfolio/fork)
[![GitHub Issues](https://img.shields.io/github/issues/samranjithpaul/Sam-Devfolio)](https://github.com/samranjithpaul/Sam-Devfolio/issues)

**A modern, responsive personal portfolio built with Next.js, styled with Tailwind CSS, and animated with Framer Motion.**

[🌐 Live Demo](https://your-portfolio-url.com) • [📖 Documentation](#-installation) • [🐛 Report Bug](https://github.com/samranjithpaul/Sam-Devfolio/issues) • [✨ Request Feature](https://github.com/samranjithpaul/Sam-Devfolio/issues)

</div>

---

## ✨ Features

- 🎨 **Clean & Modern UI** - Minimalist design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌓 **Dark/Light Mode** - Built-in theme switching with system preference detection
- ⚡ **Fast Performance** - Optimized with Next.js 15 App Router
- 🔄 **Dynamic Content** - Real-time GitHub project fetching
- 📧 **Contact Form** - Integrated EmailJS for seamless communication
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🚀 **SEO Optimized** - Meta tags and structured data included
- 💾 **Local Fonts** - Custom typography with optimal loading

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Animation & UI
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Sonner](https://img.shields.io/badge/Sonner-000000?style=for-the-badge&logo=react&logoColor=white)

### Services & Tools
![EmailJS](https://img.shields.io/badge/EmailJS-EC4444?style=for-the-badge&logo=email&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **EmailJS** account ([Sign up here](https://www.emailjs.com/))
- **GitHub** account for project fetching

---

## 🔧 Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/samranjithpaul/Sam-Devfolio.git

# Navigate to project directory
cd Sam-Devfolio

# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your portfolio in action! 🎉

---

## 🗝️ Environment Variables

Create a `.env.local` file in the project root and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> 💡 **Tip:** Never commit your `.env.local` file to version control!

---

## 📨 EmailJS Setup

### 1. Create an Email Template

1. Go to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates** → **Create Template**
3. Add the following variables:
   - `{{from_name}}`
   - `{{reply_to}}`
   - `{{message}}`

### 2. Use This Dark Email Template (Inline CSS Only)

```html
<div style="background:#0d0d0d;padding:30px;font-family:Inter,Arial;border-radius:10px;max-width:520px;margin:auto;color:#fff;">
  <div style="background:#111;border:1px solid #333;border-radius:12px;padding:28px;">
    <h2 style="margin:0;font-size:22px;font-weight:700;text-align:center;color:#fff;">✉️ New Message From Your Portfolio</h2>
    <p style="color:#aaa;text-align:center;margin-top:6px;margin-bottom:20px;font-size:13px;">Someone reached out through your contact form.</p>
    <p style="margin:0;color:#bbb;font-size:14px;">You've received a new message:</p>
    <div style="margin-top:14px;background:#0d0d0d;padding:15px;border-radius:8px;border:1px solid #333;">
      <p style="margin:0;color:#999;font-size:13px;">Name:</p>
      <p style="margin:2px 0 10px 0;font-size:16px;color:#fff;font-weight:600;">{{from_name}}</p>
      <p style="margin:0;color:#999;font-size:13px;">Email:</p>
      <p style="margin:2px 0 10px 0;color:#4fa3ff;font-size:15px;">{{reply_to}}</p>
      <p style="margin:0;color:#999;font-size:13px;">Message:</p>
      <p style="margin:6px 0;color:#fff;font-size:15px;line-height:1.5;">{{message}}</p>
    </div>
    <p style="margin-top:20px;text-align:center;color:#666;font-size:12px;">Sent from your portfolio — DevXora by Sam.</p>
  </div>
  <p style="text-align:center;margin-top:15px;color:#666;font-size:11px;">Powered by EmailJS</p>
</div>
```

---

## 🧩 Contact Form Implementation

```javascript
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      from_name: e.target.name.value,
      reply_to: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error("Message failed to send.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      <input name="name" placeholder="Your Name" className="input" required />
      <input type="email" name="email" placeholder="Your Email" className="input" required />
      <textarea name="message" placeholder="Your Message" className="input" required />
      <button type="submit" disabled={loading} className="btn">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
```

---

## 📁 Folder Structure

```
Sam-Devfolio/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── components/
│       └── Animations.js
├── components/
│   ├── ContactForm.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProjectCard.jsx
├── public/
│   ├── images/
│   └── fonts/
├── lib/
│   └── utils.js
├── styles/
│   └── globals.css
├── .env.local
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 💡 Customization

| Component | Location | Description |
|-----------|----------|-------------|
| **Animations** | `app/.../Animations.js` | Framer Motion configurations |
| **Theme** | `tailwind.config.js` | Colors, fonts, and design tokens |
| **Email Template** | EmailJS Dashboard | Email styling and content |
| **Content** | `app/page.js` | Portfolio text and information |

---

## 🔍 Troubleshooting

<details>
<summary><b>❌ EmailJS not working</b></summary>

- Verify your keys in `.env.local`
- Check template variable names match exactly: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
- Ensure EmailJS service is active in your dashboard
</details>

<details>
<summary><b>❌ White email template</b></summary>

- Some email clients strip `<style>` tags
- Use the inline CSS template provided above
- Test with different email clients
</details>

<details>
<summary><b>❌ Environment variables not loading</b></summary>

- Ensure `.env.local` exists in project root
- Restart your development server
- Variables must start with `NEXT_PUBLIC_` for client-side access
</details>

<details>
<summary><b>❌ GitHub projects not fetching</b></summary>

- Check your GitHub username in the config
- Verify repository visibility settings
- Check browser console for API errors
</details>

---

## 📈 GitHub Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=samranjithpaul&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=samranjithpaul&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=F85D7F)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=samranjithpaul&theme=radical&hide_border=true&background=0D1117&ring=F85D7F&fire=F8D866&currStreakLabel=F85D7F)

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📜 License

This project uses a **Custom License**. For usage permissions and licensing inquiries, please contact [@samranjithpaul](https://github.com/samranjithpaul).

---

## 🙏 Acknowledgments

Special thanks to these amazing projects and tools:

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- [EmailJS](https://www.emailjs.com/) - Email service for client-side applications
- [Next Themes](https://github.com/pacocoursey/next-themes) - Perfect theme switching
- [Sonner](https://sonner.emilkowal.ski/) - Beautiful toast notifications
- [Next.js TopLoader](https://github.com/TheSGJ/nextjs-toploader) - Loading bar for Next.js

---

## 📞 Connect With Me

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://sam-devfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/samranjithpaul)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samranjithpaul)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by [Sam Ranjith Paul](https://github.com/samranjithpaul)

</div>
