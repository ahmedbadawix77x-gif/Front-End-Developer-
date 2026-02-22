import { motion } from "framer-motion";

const shapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, duration: 20, rotate: 360 },
  { size: 50, x: "85%", y: "15%", delay: 2, duration: 25, rotate: -360 },
  { size: 120, x: "75%", y: "70%", delay: 1, duration: 30, rotate: 180 },
  { size: 35, x: "20%", y: "80%", delay: 3, duration: 22, rotate: -180 },
  { size: 60, x: "50%", y: "50%", delay: 1.5, duration: 28, rotate: 360 },
  { size: 45, x: "90%", y: "45%", delay: 0.5, duration: 18, rotate: -270 },
];

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.06, 0.03, 0.06, 0],
            y: [0, -30, 10, -20, 0],
            rotate: [0, shape.rotate],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        >
          {i % 3 === 0 ? (
            <div
              className="border border-foreground/10 rounded-full"
              style={{ width: shape.size, height: shape.size }}
            />
          ) : i % 3 === 1 ? (
            <div
              className="border border-foreground/10"
              style={{ width: shape.size, height: shape.size }}
            />
          ) : (
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
              <polygon
                points="50,5 95,97 5,97"
                fill="none"
                stroke="hsl(0 0% 100% / 0.08)"
                strokeWidth="1"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
