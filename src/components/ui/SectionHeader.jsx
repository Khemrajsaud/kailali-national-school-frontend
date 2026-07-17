import { motion } from "motion/react";

/**
 * SectionHeader — reusable premium section title block
 * Props:
 *   badge     : string — small pill label above heading
 *   title     : string | ReactNode — main heading
 *   subtitle  : string — supporting text
 *   center    : bool — center align (default true)
 *   light     : bool — white text for dark backgrounds
 *   className : string
 */
const SectionHeader = ({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
  className = "",
}) => {
  return (
    <motion.div
      className={`${center ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {badge && (
        <span className={`pill-badge ${light ? "pill-badge--white" : ""} mb-4 inline-flex`}>
          {badge}
        </span>
      )}
      {title && (
        <h2
          className={`text-h2 ${light ? "text-white" : "text-[--text]"} ${badge ? "mt-3" : ""}`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-[15px] leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-[--text-sec]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
