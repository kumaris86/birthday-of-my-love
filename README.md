# 🌸 Birthday Website — তোমার জন্য গাইড

এই website টা তুমি নিজে easily customize করতে পারবে।
নিচে প্রতিটা জিনিস কীভাবে বদলাবে সেটা বলা আছে।

---

## 📁 ফাইল Structure

```
birthday-site/
│
├── index.html        ← প্রথম পেজ (phone rotate করার instruction)
├── page1.html        ← Birthday hero পেজ
├── page2.html        ← স্মৃতির ছবি
├── page3.html        ← হাতের লেখার চিঠি
├── page4.html        ← Video message
├── page5.html        ← শেষ বার্তা
├── style.css         ← সব design
├── script.js         ← তারা, হার্ট, animation
│
└── assets/
    ├── images/       ← page2 এর স্মৃতির ছবি রাখো এখানে
    ├── notes/        ← page3 এর হাতের লেখার ছবি
    ├── videos/       ← page4 এর video
    └── music/        ← background music
```

---

## ✏️ কী কী বদলাবে

### ১. তার নাম (page1.html)
`page1.html` খোলো।
খোঁজো: `[HER_NAME]`
সেখানে তার নাম লিখো।
যেমন: `Happy Birthday Riya 🌸`

### ২. Background Music
- তোমার .mp3 ফাইলটা `assets/music/` ফোল্ডারে রাখো
- ফাইলের নাম দাও `birthday.mp3`
- অথবা যেকোনো নাম দিয়ে page1.html, page2.html, page3.html, page4.html, page5.html সব জায়গায় নামটা বদলে দাও

### ৩. স্মৃতির ছবি (page2.html)
- ছবিগুলো `assets/images/` এ রাখো: photo1.jpg, photo2.jpg ...
- `page2.html` খোলো
- `const PHOTOS = [...]` array খোঁজো
- প্রতিটা object-এ:
  - `src`: ছবির path
  - `caption`: ছবির নিচে কী লেখা থাকবে
  - `date`: কোন সময়ের (রাখতে না চাইলে `''` রাখো)

### ৪. হাতের লেখার চিঠি (page3.html)
- ছবিগুলো `assets/notes/` এ রাখো: note1.jpg, note2.jpg ...
- `page3.html` এর `const NOTES = [...]` array বদলাও

### ৫. Video Message (page4.html)
- video `assets/videos/` এ রাখো: message.mp4
- `page4.html` এর `const VIDEOS = [...]` array বদলাও

### ৬. শেষ বার্তা (page5.html)
- `const MESSAGE_LINES = [...]` array বদলাও
- প্রতিটা line-এ:
  - `text`: কী লেখা থাকবে
  - `highlight`: `true` হলে গোলাপি রঙে দেখাবে
  - `delay`: কত ms পরে আসবে (800 = 0.8 সেকেন্ড)
- Signature-এ নিজের নাম বদলাও: `— তোর পুরনো বন্ধু`

---

## 🚀 GitHub Pages এ Deploy করবে কীভাবে

1. GitHub এ একটা নতুন repository তৈরি করো
2. সব ফাইল upload করো (assets folder সহ)
3. Settings → Pages → Source: main branch → / (root)
4. কিছুক্ষণ পর তোমার link পাবে: `https://তোমার-username.github.io/repo-name`

---

## 💡 Tips

- ছবি compress করে নাও (TinyPNG.com) — তাহলে fast load হবে
- Video এর সাইজ 50MB এর কম রাখো
- Music .mp3 format-এ রাখো

---

শুভকামনা 🌸
