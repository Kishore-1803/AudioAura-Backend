# 🎙️ AudioAura Backend

<p align="center">
  <strong>Backend service for AudioAura — an AI-powered podcast generator.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-Backend-blue.svg"/>
  <img src="https://img.shields.io/badge/TTS-OpenAI%20%7C%20gTTS-orange.svg"/>
  <img src="https://img.shields.io/badge/Status-Active-success.svg"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

---

## 📌 Overview

**AudioAura-Backend** is the server-side component powering the AudioAura application — a dynamic podcast generation platform.  
It handles:

- Fetching **news and weather data**
- Generating **AI scripts**
- Converting text to speech (**TTS**)
- Serving audio and metadata to the frontend

The backend is implemented using **FastAPI** for speed, scalability, and maintainability.

---

## 🚀 Features

- 📰 **Realtime News Fetching**  
  Fetches top news headlines for a dynamic and relevant podcast base.

- 🌦️ **Weather Integration**  
  Includes local weather conditions in podcast scripting.

- ✍️ **AI Script Generation**  
  Uses trained AI models (or API) to generate storytelling content.

- 🔉 **Text-to-Speech (TTS)**  
  Converts generated scripts into high-quality audio.

- 📡 **REST API Endpoints**  
  Exposes well-structured, documented APIs for frontend consumption.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Backend Framework | **FastAPI** |
| Python Version | 3.9+ |
| TTS | gTTS / OpenAI TTS (configurable) |
| Deployment | Uvicorn / Docker (optional) |
| Data Sources | News API, Weather API |
---

## 📦 Getting Started

### 🔹 Prerequisites

* Python **3.9+**
* (Optional) Docker & Docker Compose
* API keys for:

  * News API
  * Weather API
  * AI Script Generation (if applicable)

---

## 🛠️ Installation (Local Dev)

1️⃣ **Clone the repository**

```bash
git clone https://github.com/Kishore-1803/AudioAura-Backend.git
cd AudioAura-Backend
```

2️⃣ **Create a virtual environment**

```bash
python -m venv .venv
source .venv/bin/activate       # macOS / Linux
.venv\Scripts\activate          # Windows
```

3️⃣ **Install dependencies**

```bash
pip install -r requirements.txt
```

4️⃣ **Configure environment**
Create a `.env` file (based on `.env.example`) and include:

```env
NEWS_API_KEY=your_news_api_key
WEATHER_API_KEY=your_weather_api_key
TTS_ENGINE=gTTS
BACKEND_PORT=8000
```

---

## ▶️ Run the Server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:

```
http://localhost:8000
```

Visit:
// [http://localhost:8000/docs](http://localhost:8000/docs) **(interactive Swagger UI)**
---

## 🔊 Podcast Generation Flow

1. **Frontend** triggers `POST /generate_audio`
2. **Backend** fetches news + weather
3. AI script is generated
4. Script is converted to audio (TTS)
5. Audio is saved to `app/static/`
6. URL returned to frontend for playback

---

## 🧪 Testing

Use the interactive Swagger UI at:

```
http://localhost:8000/docs
```

Or use curl / Postman to test endpoints:

```bash
curl -X POST http://localhost:8000/generate_audio \
  -H "Content-Type: application/json" \
  -d '{"location": "New York"}'
```

---

## 📦 Deployment

### With Docker (Optional)

1. **Build the container**

```bash
docker build -t audioaura-backend .
```

2. **Run the container**

```bash
docker run -p 8000:8000 audioaura-backend
```

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feat/your-feature
```

3. Commit and push changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the LICENSE file for details.

---

⭐ *If this project helped power your AI podcast workflow, please consider starring the repo!* ⭐
::contentReference[oaicite:0]{index=0}
```
