module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Убедитесь, что Tailwind сканирует ваши файлы
    ],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#1a1a2e',
          'light-gray': '#d1d5db',
          'green-600': '#10b981',
          'orange-500': '#f97316',
          'red-500': '#ef4444',
          'purple-500': '#8b5cf6',
        },
        fontSize: {
          '28px': '28px',
        },
        spacing: {
          '44': '11rem',
        },
        borderRadius: {
          'full': '9999px',
        },
      },
    },
    plugins: [],
  };