import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Award = {
  id: number;
  num: string;
  title: string;
  desc: string;
  date: string; // Fixed format: YYYY-MM-DD
  imgUrl: string;
};

const awardsData = [
  {
    id: 1,
    num: "01",
    title: "1st Prize Winner - Hackathon",
    desc: "Tech Connect (YTC) Inter-collegiate Hackathon facilitated by Mr. Daya Nanda Shetty and Hon. Faggan Singh Kulaste",
    date: "2024-02-25",
    imgUrl: "https://media.licdn.com/dms/image/v2/D5622AQFcNdnz3OBfFA/feedshare-shrink_1280/feedshare-shrink_1280/0/1709875725810?e=1779321600&v=beta&t=s6O4l_o5R18m9ZHd_yiAgqQvbSIJf7FrxXG7HQP-Bro",
  },
  {
    id: 2,
    num: "02",
    title: "3rd Prize - Ideathon",
    desc: "Won ideathon with team members Khushi Rokade, Siddharth Parihar, and Hitesh Mankar through an innovative solution",
    date: "2024-03-09",
    imgUrl: "",
  },
  {
    id: 3,
    num: "03",
    title: "2nd Prize - Hackathon",
    desc: "Hackbitz 8-hour hackathon at Jhulelal Institute of Technology with team members Siddharth Parihar and Hitesh Mankar",
    date: "2024-03-15",
    imgUrl: "",
  },
  {
    id: 4,
    num: "04",
    title: "1st Prize - Techathon",
    desc: "Secured 1st place at Techathon hosted by GH Raisoni College of Engineering by developing an innovative solution to a complex real-world problem",
    date: "2024-03-30",
    imgUrl: "",
  },
  {
    id: 5,
    num: "05",
    title: "2nd Prize - Startup Expo",
    desc: "Secured 2nd place at Startup Expo held at Pallotti College of Engineering and Technology, Nagpur by presenting innovative startup ideas and pitching to 30+ industry leaders and investors",
    date: "2024-10-19",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQE4TaQSSLkW8A/feedshare-shrink_1280/feedshare-shrink_1280/0/1729400114449?e=1779321600&v=beta&t=lQtLQdJjzsN-1eIWLmVRUlTWNnIz5IGZP_GHCwzS4Bw",
  },
  {
    id: 6,
    num: "06",
    title: "1st Prize - 24 Hour Hackathon",
    desc: "Won 1st place at a 24-hour hackathon hosted by Government Polytechnic Nagpur, securing a cash prize of ₹15,000 for delivering an impactful solution under time constraints",
    date: "2024-10-25",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQHBz-QGXxuTQg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1730047911382?e=1779321600&v=beta&t=e6gL5lXBr9R1APhSMYDXzTshL-mBm86aU7zw569sMnc",
  },
  {
    id: 7,
    num: "07",
    title: "1st Prize - Technex Hackathon",
    desc: "Secured 1st place at Technex Hackathon hosted by St. Vincent Pallotti College of Engineering & Technology among 120+ teams, winning ₹35,000 for building an innovative solution in a 24-hour challenge",
    date: "2025-01-21",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQF0mp__orDXVQ/feedshare-shrink_2048_1536/B56ZSeFViCGUAo-/0/1737819000307?e=1779321600&v=beta&t=9_sr3fwtFb9cP8DuCkOt-f0W2XlqcYKyg4n-wRwrNCU",
  },
  {
    id: 8,
    num: "08",
    title: "Organizer - Central India Hackathon 2025",
    desc: "Led and organized Central India Hackathon 2025, initiating hackathon culture at the college and managing a Pan-India event with 75+ teams and 300+ participants",
    date: "2025-02-07",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQHy55hiLqPW2w/feedshare-shrink_1280/B56ZUpGF4NHEAk-/0/1740151228446?e=1779321600&v=beta&t=ROA--9FDKJaq46goyaBNushDGuCTfoTsJttVjoRM8-4",
  },
  {
    id: 9,
    num: "09",
    title: "2nd Runner-Up - CodeHunt Hackathon",
    desc: "Secured 2nd Runner-Up position at CodeHunt 24-hour hackathon, marking the 4th consecutive win through consistent performance and problem-solving under pressure",
    date: "2025-02-16",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D4D22AQEW61vWT8TO0g/feedshare-shrink_2048_1536/B4DZU4WFUHHkAo-/0/1740407072006?e=1779321600&v=beta&t=QcnuSmQnZ_vQqi7dWVZ3z5to8H9z8v70PhWKUPXKm3A",
  },
  {
    id: 10,
    num: "10",
    title: "1st Prize - SITNovate Hackathon",
    desc: "Secured 1st place at SITNovate 24-hour hackathon hosted by Symbiosis Institute of Technology, outperforming 700+ teams through multi-stage evaluation including ideation, development, and final pitching rounds",
    date: "2025-02-20",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQGXYk9Btc0DGw/feedshare-shrink_1280/B56ZVA5VvwHQAk-/0/1740550533815?e=1779321600&v=beta&t=rjVpDj_nfJvNcjTqaJ8cNC4CWWR2PaRnYYHYEGfyWfw",
  },
  {
    id: 11,
    num: "11",
    title: "1st Prize - HackWhack 2.0",
    desc: "Secured 1st place at HackWhack 2.0, marking the 6th consecutive hackathon victory and 9th overall win through continuous innovation and problem-solving excellence",
    date: "2025-02-24",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D4D22AQFPsECySbimhg/feedshare-shrink_2048_1536/B4DZXIqfIOH4Ao-/0/1742828341084?e=1779321600&v=beta&t=3cHAsMIOPUmyEyL2mk6oQIwBH2Ycx_k9yp71ko9-0Tc",
  },
  {
    id: 12,
    num: "12",
    title: "1st Runner-Up - Hackathon",
    desc: "Achieved 1st Runner-Up position in a 12-hour hackathon, marking the 10th overall hackathon victory and extending a strong streak of consistent high-performance innovation",
    date: "2025-03-29",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQHr_8qP9Kh3MA/feedshare-shrink_2048_1536/B56ZYLb8_AHEAo-/0/1743948622967?e=1779321600&v=beta&t=jSa2zUyHrOf3VywiVH3A-JJuZwNMEHsC9l-QhnVGznc",
  },
  {
    id: 13,
    num: "13",
    title: "Conducted AI Workshop",
    desc: "Successfully conducted an AI Agent & Automation workshop at Suryodaya College of Engineering & Technology, impacting 40+ learners and delivering hands-on learning experience",
    date: "2025-06-15",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQGU3dxGikEEjA/feedshare-shrink_2048_1536/B56ZeGGEJwGoAs-/0/1750301428521?e=1779321600&v=beta&t=yQve_OcCS5NYoipXUcb18wY7uSm_wj_MHKAX8piIOes",
  },
  {
    id: 14,
    num: "14",
    title: "Lead Organizer - Central India Hackathon 2.0",
    desc: "Led and executed Central India Hackathon 2.0, scaling it to one of India’s largest student-led hackathons with 800+ teams and 2000+ developers across 150+ cities",
    date: "2025-06-24",
    imgUrl: "",
  },
  {
    id: 15,
    num: "15",
    title: "Completed Webspark Program - Traillx",
    desc: "Successfully completed and led the Webspark training program under Traillx, mentoring 160+ students over 2 months in full-stack development, hackathons, and real-world project building",
    date: "2025-09-08",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQFMMPzL-2MJVg/feedshare-shrink_1280/B56ZkoDEVDG4As-/0/1757313518038?e=1779321600&v=beta&t=fo-aV7vX7AKdlgBYRFn0xcotkxXEd96KLg2AjSdhYL0",
  },
  {
    id: 16,
    num: "16",
    title: "Hackathon Judge - Genathon 3.0",
    desc: "Invited as a judge at Genathon 3.0 hosted by IIIT Nagpur, evaluating 23 teams on innovation, scalability, and problem-solving while identifying top-performing solutions",
    date: "2025-10-11",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQGJuV03E6Wv-g/feedshare-shrink_1280/B56Zng2UvYG4As-/0/1760413962437?e=1779321600&v=beta&t=Ri2r23-37ZFozxm0JBVz8wrak6fTzUENVlkF9fT97dE",
  },
  {
    id: 17,
    num: "17",
    title: "SIH 2025 Mentor",
    desc: "Mentored 20+ teams for Smart India Hackathon 2025 as Technical Head, guiding problem selection, solution design, and execution, with one team qualifying for the national hardware finals",
    date: "2025-12-02",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQFBEL9SBvJZ5g/feedshare-shrink_2048_1536/B56ZtBBiN0JoAw-/0/1766322481065?e=1779321600&v=beta&t=Huwy1x-m45ySAwZL4tuI5wahOiiKW3X-jvZSppbMb9M",
  },
  {
    id: 18,
    num: "18",
    title: "Co-Lead - Central India Hackathon 3.0",
    desc: "Co-led Central India Hackathon 3.0, achieving India Book of Records recognition for maximum participation in an offline SDG-focused hackathon and driving large-scale impact innovation",
    date: "2026-01-30",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQEvMXMEk5G15A/feedshare-shrink_2048_1536/B56ZxfnglEIIAs-/0/1771130718988?e=1779321600&v=beta&t=ELfDHfyluQuYCbyml7XY-wJmBdIXzyOc-vWnATevPfw",
  },
  {
    id: 19,
    num: "19",
    title: "Top 10 Finalist - India AI Impact Summit 2026",
    desc: "Secured Top 10 position at India AI Impact Summit 2026 Buildathon among 15,000+ teams, presenting a real-time AI voice fraud detection system at the national grand finale",
    date: "2026-02-16",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQGhnSdPb_KOwA/feedshare-shrink_1280/B56ZyAczlUJUAc-/0/1771681561517?e=1779321600&v=beta&t=VLXpPBFKtjdfAiYPo-1SMdCXwKgPTb21M-wJMhrTku4",
  },
  {
    id: 20,
    num: "20",
    title: "Mentor - AM Hacks 2.0",
    desc: "Mentored 14 teams at AM Hacks 2.0 on the same day as being a Top 10 finalist at a national AI summit, guiding teams on idea validation, MVP refinement, and problem-solving under time constraints",
    date: "2026-02-16",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQHsTSRBXMRNiw/feedshare-shrink_2048_1536/B56ZydZMtFJMAk-/0/1772167154800?e=1779321600&v=beta&t=I7pYd716PiDX2kMKjs_geYB8sc0H4yjRBxb9Y2tsz4k",
  },
  {
    id: 21,
    num: "21",
    title: "Hackathon Judge - HackOn 2.0",
    desc: "Invited as a judge at HackOn 2.0 by GDG GCOEN, evaluating 20 teams on innovation, execution, and technical understanding while identifying top-performing solutions",
    date: "2026-03-10",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQGaLtIq6KPn4Q/feedshare-shrink_2048_1536/B56Z0EwSnVHoAg-/0/1773901262207?e=1779321600&v=beta&t=Hv9GJdPTP5ShyH7nSKL3S9SUkDSORew2AxCTa7XNxOg",
  },
  {
    id: 22,
    num: "22",
    title: "Hackathon Judge - Krutiverse 2026",
    desc: "Invited as a judge at Krutiverse Hackathon 2026, evaluating 30+ teams and guiding multi-round selections, emphasizing clarity, execution, and impactful problem-solving",
    date: "2026-03-24",
    imgUrl: "https://media.licdn.com/dms/image/v2/D5622AQGG7EFUXwdpzA/feedshare-shrink_2048_1536/B56Z1Y4G3mKgAg-/0/1775312596696?e=1779321600&v=beta&t=hpwui_Dd_-8j4Yq3dzdfHC4SKA1P3gRhRxIVHd6kY30",
  },
] satisfies Award[];

const sortedAwardsData = [...awardsData].sort((a, b) =>
  b.date.localeCompare(a.date),
);

const formatAwardDate = (date: string) => {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
};

export function Awards() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -window.innerWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: window.innerWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="awards"
      className="bg-black text-primary py-24 px-4 md:px-8 border-t border-white/10 relative"
    >
      {/* Header section matching reference */}
      <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-between mb-12 md:mb-20 relative">
        <div className="absolute top-0 left-0 hidden md:block">
          <span className="text-primary/50 text-[10px] sm:text-xs uppercase tracking-widest block">
            [05] Awards
          </span>
        </div>

        <div className="mx-auto text-center flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95] text-center">
            <span className="text-primary">Awards &</span>
            <br />
            <span className="text-gray-500 italic font-serif">
              Recognitions
            </span>
          </h2>
          <p className="text-[10px] sm:text-xs font-sans text-primary/40 mt-8 tracking-[0.3em] uppercase">
            © 2021 — 2026
          </p>
        </div>

        {/* Mobile Carousel Navigation */}
        <div className="flex md:hidden gap-4 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-white/5 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-white/5 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Masonry on Desktop / Carousel on Mobile */}
      <div
        ref={carouselRef}
        className="max-w-[1600px] mx-auto flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none hide-scrollbar gap-6 md:gap-8 md:columns-2 lg:columns-3 md:space-y-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {sortedAwardsData.map((award, idx) => {
          // Generate a varied height so it looks like proper masonry on desktop
          const isTall = idx === 1 || idx === 3 || idx === 6;
          const heightClass = isTall
            ? "h-[600px] lg:h-[700px]"
            : idx % 2 === 0
              ? "h-[400px] lg:h-[450px]"
              : "h-[500px] lg:h-[550px]";

          const formattedDate = formatAwardDate(award.date);

          return (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (idx % 3) * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="break-inside-avoid group cursor-pointer shrink-0 snap-center w-[85vw] md:w-full md:mb-8"
            >
              {/* Image Box */}
              <div
                className={`relative w-full ${heightClass} overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700`}
                style={{ backgroundColor: "#0a0a0a" }}
              >
                <img
                  src={award.imgUrl}
                  alt={award.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] opacity-80 group-hover:opacity-100"
                />

                {/* Thin overlay to map the dark tone in references */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                {/* Number [01] */}
                <div className="absolute top-4 left-5">
                  <span className="text-[10px] font-mono text-primary/40">
                    [{award.num}]
                  </span>
                </div>

                {/* Center Hover Content (Simulating Logo overlay) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                    <svg
                      className="w-4 h-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="text-primary font-medium text-sm tracking-tight">
                      Kunal
                    </span>
                  </div>
                </div>

                {/* Plus (+) sign */}
                <div className="absolute bottom-5 right-5 z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <span className="text-primary/40 text-xl leading-none font-light">
                    +
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 pb-4 flex justify-between items-start border-b border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                <div className="pr-4">
                  <h4 className="text-primary text-xl font-normal tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-500">
                    {award.title}
                  </h4>
                  <p className="text-xs font-normal text-gray-500 uppercase tracking-widest">
                    {award.desc}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-gray-600 whitespace-nowrap mt-1">
                  {formattedDate}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Link matching "All Case Studies" */}
      <div className="max-w-[1600px] mx-auto flex justify-end mt-16 pb-8 border-t border-white/10 pt-8">
        <a
          href="#awards"
          className="text-xs uppercase tracking-[0.2em] font-medium text-primary/60 hover:text-primary transition-all duration-300 flex items-center gap-4 group"
        >
          <span>[10] All Accolades</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary group-hover:text-black transition-all duration-500">
            <span className="text-lg leading-none mb-0.5">↗</span>
          </div>
        </a>
      </div>
    </section>
  );
}
