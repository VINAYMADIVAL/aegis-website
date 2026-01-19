import { motion } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import { members } from "@/constants/Members";
import {
  simpleFadeIn,
  container,
  item,
  testimonialHeading,
  decorativeElement,
  dividerVariants,
} from "@/styles/Animations";

const Members = () => {
  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section header with animations */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialHeading}
            >
              <motion.span
                className="text-red-500 font-pacifico font-bold"
                variants={decorativeElement}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Meet{" "}
              </motion.span>
              the Team Behind Aegis
            </motion.h2>

            <div className="flex justify-center">
              <motion.div
                className="h-1 w-32 bg-red-500 mb-8"
                // style={{ width: "128px" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={dividerVariants}
              ></motion.div>
            </div>

            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={simpleFadeIn}
            >
              The "Aegis Cyber Club" is a student-run community where members
              work together to learn, share ideas, and grow their skills in
              cybersecurity and technology.
            </motion.p>
          </div>

          {/* Members grid with equal height cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {members.map((member) => (
              <motion.div
                key={member.id}
                className="h-full"
                variants={item}
                whileHover="hover"
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Members;
