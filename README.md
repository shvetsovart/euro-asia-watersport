# 🌊 WaterSport Extreme Challenges

A modern, responsive website for extreme water sports challenges built with **Next.js 14** and **Feature-Sliced Design** architecture.

## 🚀 Features

-   **🏊‍♂️ 150km Solo Challenge** - Individual extreme swimming adventure
-   **🏊‍♀️ 150km Team Challenge** - Relay swimming with professional support
-   **⏰ Real-time Countdown** - Live countdown to event date with SSR compatibility
-   **📱 Fully Responsive** - Optimized for all devices and screen sizes
-   **🎨 Modern UI/UX** - Beautiful animations and gradient designs
-   **⚡ Performance Optimized** - Built with Next.js 14 App Router

## 🛠️ Tech Stack

-   **Framework:** Next.js 14 (App Router)
-   **Language:** TypeScript
-   **Styling:** CSS Modules
-   **Architecture:** Feature-Sliced Design (FSD)
-   **Fonts:** Inter & Montserrat (Google Fonts)
-   **Deployment:** Vercel
-   **Version Control:** Git & GitHub

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── entities/              # Business entities (Challenge, Product)
├── shared/                # Shared utilities and UI components
│   ├── ui/               # Reusable UI components
│   ├── lib/              # Utilities and hooks
│   └── config/           # Configuration files
└── widgets/              # Page sections and complex components
    ├── Header/
    ├── HeroSection/
    ├── EventDescription/
    ├── SupportDetails/
    ├── IncludedServices/
    ├── ParticipationRequirements/
    └── RegistrationForm/
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/YOUR_USERNAME/watersport-extreme.git
    cd watersport-extreme
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint
-   `npm run lint:fix` - Fix ESLint errors automatically
-   `npm run type-check` - Run TypeScript type checking
-   `npm run preview` - Build and preview production version

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Manual Deployment

```bash
npm run build
npm run start
```

## 🎯 Key Features Implemented

### 🏗️ Architecture

-   **Feature-Sliced Design** for scalable code organization
-   **TypeScript** for type safety
-   **CSS Modules** for scoped styling

### 🎨 UI/UX

-   **Responsive Design** with mobile-first approach
-   **Smooth Animations** and hover effects
-   **Modern Gradients** and glassmorphism effects
-   **Optimized Images** with Next.js Image component

### ⚡ Performance

-   **Server-Side Rendering** (SSR) compatible
-   **Static Generation** for optimal loading
-   **Image Optimization** with next/image
-   **Font Optimization** with next/font

### 🔧 Developer Experience

-   **ESLint** configuration with 4-space indentation
-   **TypeScript** strict mode
-   **Hot Reload** with Turbopack
-   **Git hooks** ready

## 📱 Pages

-   **`/`** - Landing page with challenge overview
-   **`/extreme-150`** - 150km Solo Challenge details
-   **`/extreme-150-camp`** - 150km Team Challenge details

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

-   **Next.js** team for the amazing framework
-   **Vercel** for seamless deployment
-   **Feature-Sliced Design** methodology
-   **Unsplash** for beautiful stock photos (replaced with local images)

---

**Built with ❤️ using Next.js 14 and modern web technologies**
