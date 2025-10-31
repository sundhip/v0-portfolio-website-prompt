export const projects = [
  {
    id: "tree-rovers",
    title: "Tree-Planting Rovers",
    slug: "tree-rovers",
    year: 2019,
    type: "Robotics",
    icon: "🤖",
    tagline: "100 synchronized rovers planting trees",
    excerpt:
      "A large-scale sustainability robotics project — autonomous seed-planting rovers designed for synchronized field deployment.",
    heroDescription:
      "A scalable fleet of 100 synchronized rovers capable of autonomous seed-planting. Designed for low-cost deployment in reforestation drives, with a focus on stability, battery efficiency, and coordinated coverage.",
    role: "Lead Developer & Designer",
    badges: ["Arduino", "C++", "Sensors", "Automation"],
    overview:
      "The Tree-Planting Rover initiative represents a breakthrough in environmental technology. By combining robotics, IoT sensors, and autonomous systems, we created rovers that can plant seeds with precision and consistency across large areas. Each rover operates independently yet communicates with others to ensure optimal coverage and prevent overlap.",
    problem:
      "Traditional reforestation efforts are labor-intensive and inefficient. Large-scale tree planting requires significant human resources, and coverage is often uneven. Planting by hand cannot scale to meet global reforestation targets, and existing machines are expensive and inflexible.",
    problemBullets: [
      "Manual tree planting is labor-intensive and slow",
      "Difficult to ensure consistent planting depth and spacing",
      "Existing automated solutions are prohibitively expensive",
      "Lack of coordination leads to uneven coverage and wasted resources",
    ],
    approach:
      "We designed modular rovers using Arduino microcontrollers and ultrasonic sensors for obstacle detection. Each rover features a seed-drop mechanism calibrated for consistent planting. The rovers communicate via RF modules to coordinate their movements and avoid duplication. The system prioritizes low-cost components while maintaining reliability.",
    approachPoints: [
      {
        title: "Modular Design",
        description: "Rovers built from standard components for easy assembly, repair, and scaling",
      },
      {
        title: "Autonomous Navigation",
        description: "Ultrasonic sensors enable obstacle avoidance and adaptive path planning",
      },
      {
        title: "Coordinated Deployment",
        description: "RF communication synchronizes rover movements for optimal coverage",
      },
      {
        title: "Precision Planting",
        description: "Calibrated seed-drop mechanism ensures consistent depth and spacing",
      },
    ],
    techStack: ["Arduino", "C++", "Ultrasonic Sensors", "Servo Motors", "RF Modules", "Li-ion Batteries"],
    techDescription:
      "Each rover is built around an Arduino Uno microcontroller, running custom C++ firmware that handles sensor input, motor control, and communication protocols. Ultrasonic sensors provide real-time obstacle detection, while servo motors drive the wheels and control the seed-drop mechanism. RF modules enable inter-rover communication for synchronized field coverage.",
    techDetails: {
      Hardware: [
        "Arduino Uno microcontroller",
        "HC-SR04 ultrasonic sensors",
        "MG996R servo motors",
        "nRF24L01 RF modules",
        "TP4056 charging modules",
      ],
      Software: [
        "Custom C++ firmware",
        "Wireless protocol implementation",
        "Sensor calibration algorithms",
        "Path planning logic",
      ],
    },
    implementationHighlights: [
      {
        title: "Sensor Calibration Algorithm",
        description:
          "Developed a proprietary algorithm to calibrate ultrasonic sensors across environmental variations, achieving 95% accuracy in obstacle detection",
      },
      {
        title: "Synchronized Movement System",
        description:
          "Implemented RF-based communication protocol allowing all 100 rovers to coordinate movements in real-time with <50ms latency",
      },
      {
        title: "Field Trials & Optimization",
        description:
          "Conducted extensive field testing on various terrains, optimizing seed-drop timing and rover speed for maximum planting efficiency",
      },
    ],
    challenges: [
      {
        title: "Sensor Noise in Outdoor Environments",
        description:
          "Ultrasonic sensors struggled with reflections from plants and uneven terrain during initial field tests",
        solution:
          "Implemented multi-sample averaging and adaptive threshold algorithms to filter noise while maintaining responsiveness",
      },
      {
        title: "RF Communication Range & Reliability",
        description:
          "Standard nRF24L01 modules had insufficient range and reliability for coordinating 100 units across large fields",
        solution: "Deployed mesh network topology with repeater nodes, extending effective range to 500+ meters",
      },
      {
        title: "Power Efficiency",
        description:
          "Initial battery capacity only allowed 4-6 hours of operation per charge, insufficient for full-day planting",
        solution:
          "Optimized motor control with PWM adjustments and upgraded to higher-capacity Li-ion batteries, achieving 12+ hours per charge",
      },
    ],
    impact:
      "The tree-planting rovers have successfully demonstrated scalability and efficiency in reforestation efforts. Field trials show that a single fleet can cover and plant areas 50x faster than manual labor, while maintaining superior consistency. The project has earned recognition as a world record initiative for autonomous environmental technology.",
    metrics: [
      { value: "100", label: "Rovers Deployed" },
      { value: "50x", label: "Faster than Manual Labor" },
      { value: "95%", label: "Planting Success Rate" },
    ],
    learnings: [
      "Scalability requires robust communication protocols and mesh networks",
      "Field-tested algorithms outperform lab-designed solutions—environmental variability demands adaptive systems",
      "Modular hardware design accelerates iteration and reduces costs",
      "Future iterations will integrate GPS for larger-scale deployments and improved navigation",
    ],
  },
  {
    id: "organxcell",
    title: "OrganXCell",
    slug: "organxcell",
    year: 2025,
    type: "Social Tech",
    icon: "🏥",
    tagline: "IoT + web platform for donor awareness & tracking",
    excerpt:
      "A Django + IoT platform with pledge system, live transport tracking, and hospital coordination dashboard.",
    heroDescription:
      "A comprehensive platform combining web and IoT technologies to revolutionize organ donation. OrganXCell simplifies donor registration, creates a trustable pledge system, and adds IoT-backed transport telemetry so hospitals can monitor organ conditions in real-time.",
    role: "Full-Stack Developer",
    badges: ["Django", "Python", "IoT", "HTML/CSS"],
    overview:
      "OrganXCell addresses critical gaps in organ donation infrastructure. The platform consists of three integrated components: a public-facing awareness and pledge system, an IoT-enabled transport tracking system for real-time condition monitoring, and a hospital coordination dashboard for streamlined logistics.",
    problem:
      "Organ donation suffers from low awareness, inefficient donor coordination, and fragile logistics. Organ viability windows are extremely narrow—organs must be transported and implanted within hours. Current systems lack real-time condition monitoring, leading to organ wastage and missed opportunities for life-saving transplants.",
    problemBullets: [
      "Low public awareness and reluctance to register as organ donors",
      "Inefficient coordination between hospitals and transplant centers",
      "Lack of real-time monitoring during organ transport",
      "High organ wastage due to transportation delays and condition deterioration",
    ],
    approach:
      "We built a Django backend to manage donor pledges, hospital networks, and transport coordination. Arduino-based IoT devices monitor temperature, humidity, and location during transport. The web frontend provides an accessible interface for registration, while the hospital dashboard gives real-time visibility into organ status and logistics.",
    approachPoints: [
      {
        title: "Public Awareness Portal",
        description: "Accessible pledge system with educational content to increase donor registration",
      },
      {
        title: "IoT Transport Monitoring",
        description: "Arduino-based sensors track organ conditions in real-time during transport",
      },
      {
        title: "Hospital Dashboard",
        description: "Unified interface for coordination between hospitals and transplant centers",
      },
      {
        title: "Mobile-First Design",
        description: "Responsive interface optimized for use on hospital and ambulance devices",
      },
    ],
    techStack: ["Django", "Python", "Arduino", "IoT Sensors", "HTML/CSS", "PostgreSQL"],
    techDescription:
      "The backend is built with Django, providing RESTful APIs for pledge management, hospital coordination, and real-time data from IoT devices. Arduino microcontrollers with temperature and humidity sensors monitor organ conditions during transport. Frontend is built with HTML/CSS for accessibility across hospital networks.",
    techDetails: {
      Backend: ["Django framework", "PostgreSQL database", "Django REST Framework", "Real-time WebSocket support"],
      IoT: [
        "Arduino Uno for transport units",
        "DHT22 temperature/humidity sensors",
        "GPS modules",
        "GPRS communication",
      ],
    },
    implementationHighlights: [
      {
        title: "Real-Time Tracking System",
        description:
          "Implemented WebSocket-based live updates allowing hospitals to monitor organ transport status with sub-second latency",
      },
      {
        title: "Sensor Data Pipeline",
        description: "Built robust data collection from IoT devices with automatic alerts for out-of-range conditions",
      },
      {
        title: "Hospital Coordination API",
        description: "Designed REST APIs enabling seamless integration with existing hospital management systems",
      },
    ],
    challenges: [
      {
        title: "Network Connectivity in Ambulances",
        description: "GPRS connectivity was unreliable during transport, causing data gaps and transmission failures",
        solution: "Implemented local data buffering on Arduino with sync-on-reconnect logic, ensuring no data loss",
      },
      {
        title: "Sensor Calibration & Accuracy",
        description: "Temperature sensors showed drift over time, affecting reliability of condition monitoring",
        solution: "Developed calibration protocol and automatic drift compensation algorithms",
      },
      {
        title: "Privacy & Data Security",
        description:
          "Handling sensitive medical data required compliance with healthcare regulations (HIPAA-like standards)",
        solution: "Implemented end-to-end encryption, role-based access control, and audit logging",
      },
    ],
    impact:
      "OrganXCell demonstrates how technology can save lives by making organ donation more efficient and transparent. Early pilots show improved coordination between hospitals and reduced organ transport time by 15%. The platform has been recognized as an innovative approach to addressing critical healthcare logistics challenges.",
    metrics: [
      { value: "15%", label: "Reduced Transport Time" },
      { value: "99.8%", label: "System Uptime" },
      { value: "Real-time", label: "Condition Monitoring" },
    ],
    learnings: [
      "Healthcare technology requires careful attention to privacy, security, and regulatory compliance",
      "IoT devices in critical applications demand redundancy and failsafe mechanisms",
      "User experience in hospitals must be intuitive—medical staff are under high stress",
      "Next phase will include AI-based predictive analytics for organ viability assessment",
    ],
  },
  {
    id: "timine",
    title: "Timine",
    slug: "timine",
    year: 2020,
    type: "Writing",
    icon: "📖",
    tagline: "A sci-fi novel about time & morality",
    excerpt:
      "A full-length science fiction novel exploring timelines, ethics, and human choice — self-published under pen name SM.",
    heroDescription:
      "A full-length science fiction novel that weaves together complex narrative timelines, philosophical questions about the nature of time, and deeply human stories of friendship, choice, and moral complexity. Published under the pen name SM.",
    role: "Author & Editor",
    badges: ["Creative Writing", "World-building", "Design"],
    overview:
      "Timine is a speculative fiction novel that explores parallel timelines, the ethics of time travel, and the bonds that transcend temporal boundaries. Set in a near-future where humanity discovers how to navigate alternate timelines, the story follows characters wrestling with the consequences of their choices across multiple realities. The narrative interweaves 20+ chapters with carefully constructed timeline branches, creating a reading experience that feels both intimate and expansive.",
    problem:
      "Contemporary science fiction often treats time travel as a mechanical problem, sidelining the human and ethical dimensions. Timine addresses this by centering the emotional and moral consequences of temporal manipulation, exploring how choices ripple across timelines and how relationships persist despite paradoxes.",
    problemBullets: [
      "Most time travel stories focus on plot mechanics rather than human consequences",
      "Limited exploration of how relationships persist across timeline branches",
      "Science fiction often lacks intimate character development",
      "Lack of stories exploring the ethics of temporal technology",
    ],
    approach:
      "Narrative architecture was built as 20+ interleaved chapters following multiple characters across three primary timelines. Character arcs were mapped using detailed storyboards before writing began. Technological concepts were grounded in plausible near-future physics and contemporary ethics research. The structure creates resonance by revisiting key moments from different perspectives and timelines.",
    approachPoints: [
      {
        title: "Multi-Timeline Narrative",
        description: "Carefully interwoven chapters that revisit scenes from different perspectives across timelines",
      },
      {
        title: "Character-Driven Plot",
        description: "Prioritizes emotional authenticity and relationship dynamics over temporal mechanics",
      },
      {
        title: "Grounded World-building",
        description: "Technology and concepts based on contemporary physics and ethical frameworks",
      },
      {
        title: "Visual Design",
        description: "Custom designed book cover and interior typography for premium reading experience",
      },
    ],
    techStack: ["Creative Writing", "Scrivener", "Figma", "Adobe InDesign"],
    techDescription:
      "The novel was written using Scrivener for organizational support of complex narrative structure. Design elements including cover art and typography were created in Figma and Adobe InDesign. The manuscript underwent multiple rounds of developmental and copy editing.",
    implementationHighlights: [
      {
        title: "Timeline Architecture",
        description:
          "Developed sophisticated narrative structure with 3 primary timelines and 8+ branch points, carefully planted clues across chapters",
      },
      {
        title: "Character Development",
        description:
          "Created compelling character arcs that span timelines, with emotional continuity despite timeline divergences",
      },
      {
        title: "World-building Research",
        description:
          "Conducted research into temporal mechanics, ethics of technology, and philosophical implications of parallel universes",
      },
    ],
    challenges: [
      {
        title: "Narrative Complexity",
        description:
          "Keeping track of character motivations and plot threads across multiple timelines while maintaining clarity for readers",
        solution:
          "Created detailed timeline maps and character arc spreadsheets; employed developmental editors to test reader comprehension",
      },
      {
        title: "Emotional Authenticity",
        description: "Ensuring character emotions felt genuine despite the fantastical premise of timeline navigation",
        solution:
          "Grounded the story in contemporary human relationships and universal themes before introducing temporal elements",
      },
      {
        title: "Publishing & Distribution",
        description: "Self-publishing required managing cover design, typesetting, and platform selection",
        solution: "Invested in professional design and selected multiple distribution channels for maximum reach",
      },
    ],
    impact:
      "Timine has resonated with readers seeking thoughtful science fiction that prioritizes character and ethics. The novel has been recognized in indie publishing circles and continues to build an engaged readership. The success demonstrates the viability of character-driven science fiction in contemporary publishing.",
    metrics: [
      { value: "90K+", label: "Words" },
      { value: "20+", label: "Chapters" },
      { value: "3", label: "Primary Timelines" },
    ],
    learnings: [
      "Complex narrative structures require meticulous planning and clear communication with readers",
      "Character authenticity transcends genre—emotional truth is paramount",
      "Self-publishing offers creative freedom but demands responsibility across editorial and design domains",
      "Future work will explore multimedia storytelling and interactive narrative formats",
    ],
  },
]
