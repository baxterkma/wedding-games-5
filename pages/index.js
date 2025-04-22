
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md space-y-4"
  >
    <h2 className="text-2xl font-bold text-rose-600">{title}</h2>
    {children}
  </motion.div>
);

export default function WeddingGames() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4 py-10 space-y-10 font-sans"
    >
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-extrabold text-rose-600 drop-shadow">🌞 The Wedding Games</h1>
        <p className="text-lg text-rose-700">Celebrating our Solstice Wedding</p>
        <p>Sunday, 22nd June 2025 · Monikie Country Park, Angus · 10am–10pm</p>
      </div>

      <Section title="Welcome!">
        <p>We're tying the knot on the 21st in a small ceremony with just close family and a few pals — and the next day, we're throwing a full day of celebrations with all of you!</p>
        <p><strong>Expect games, mischief, a bit of madness, and a lot of love.</strong></p>
        <p>This is a casual, outdoorsy, joyful day of fun — think hen/stag meets wedding festival.</p>
      </Section>

      <Section title="🎯 The Plan">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Morning:</strong> Scavenger Hunt: Find the Bride & Groom, Landscape Artist Challenge, Mini Games</li>
          <li><strong>Lunch:</strong> Fresh pizzas at the marquee 🍕</li>
          <li><strong>Afternoon:</strong> Aqua Splash Assault Course, Stand Up Paddle Boarding, Canoeing (Optional)</li>
          <li><strong>Evening:</strong> Cocktail Hour, Dinner, Cake & After-Dinner Games</li>
        </ul>
      </Section>

      <Section title="🌅 Dinner & Cake">
        <ul className="list-disc list-inside space-y-1">
          <li>🍗 Sicilian Chicken</li>
          <li>🥘 Moussaka (Vegan & Gluten Free)</li>
          <li>🍝 Mushroom Pasta (Gluten Free)</li>
        </ul>
        <p>Buffet style. Mix and match. Long-table feast!</p>
      </Section>

      <Section title="📍 Good to Know">
        <ul className="list-disc list-inside space-y-1">
          <li>Toilets across the park 🚻</li>
          <li>Tea, coffee, and water in the marquee ☕</li>
          <li>Alcoholic drinks at Byzantium all day 🍹</li>
          <li>Bring a towel and change of clothes for water activities 🏄‍♂️</li>
        </ul>
      </Section>

      <Section title="✅ RSVP by 6 May 2025">
        <ul className="list-disc list-inside space-y-1">
          <li>✔️ Aqua Splash – Yes / No</li>
          <li>✔️ Stand Up Paddle Board – Yes / No</li>
          <li>🍽️ Dietary Requirements</li>
        </ul>
      </Section>
    </motion.div>
  );
}
