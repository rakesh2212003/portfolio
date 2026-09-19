export const portfolioData = {
    personal: {
        name: "Rakesh Rana",
        role: "Data Engineer",
        statusBadge: "Open to Data Engineering roles",
        headline: "Building resilient data pipelines and modern cloud platforms.",
        bio: "I'm a Data Engineer focused on distributed systems, real-time streaming, and cloud data platforms. I build reliable pipelines with Spark, Snowflake, and Python to turn raw data into useful business insight.",
        location: "Kolkata, India (Remote Available)",
        email: "rakesh.rana2213@gmail.com",
        github: "https://github.com/rakesh2212003",
        linkedin: "https://linkedin.com/in/rakesh2213",
        twitter: "https://x.com/_otaku_rana",
        resumeUrl: "https://docs.google.com/document/d/1s8SJUYO8kR7dGGixeJVRTYkJq-1DQcNiAhr985M6GLs/edit?usp=sharing",
        avatarUrl: "/profile.jpg",
    },

    stats: [
        { label: "Years Experience", value: "2+", description: "In data engineering & analytics" },
        { label: "Pipelines in Prod", value: "100+", description: "Across batch, streaming, and cloud" },
        { label: "Data Processed", value: "10+ TB/day", description: "Reliable ingestion at scale" },
        { label: "Pipeline Reliability", value: "99.99%", description: "SLA-focused operational stability" },
    ],

    skillCategories: [
        {
            name: "Distributed Compute & Big Data",
            skills: [
                { name: "Apache Spark (PySpark)", level: "Expert", icon: "Cpu" },
                { name: "Databricks", level: "Advanced", icon: "Boxes" },
                { name: "Delta Lake", level: "Expert", icon: "Database" },
                { name: "Apache Iceberg", level: "Advanced", icon: "Layers" },
                { name: "Hadoop / EMR", level: "Advanced", icon: "Server" },
            ],
        },
        {
            name: "Data Warehouses & Cloud Platforms",
            skills: [
                { name: "Snowflake", level: "Expert", icon: "DatabaseZap" },
                { name: "AWS (S3, Redshift, Glue)", level: "Expert", icon: "Cloud" },
                { name: "PostgreSQL & MySQL", level: "Expert", icon: "Database" },
            ],
        },
        {
            name: "Orchestration & Data Quality",
            skills: [
                { name: "Apache Airflow", level: "Expert", icon: "Workflow" },
                { name: "Dimensional Modeling", level: "Expert", icon: "Layout" },
                { name: "Great Expectations", level: "Advanced", icon: "CheckCircle2" },
                { name: "CDC", level: "Advanced", icon: "Network" },
                { name: "Data Lineage & Governance", level: "Advanced", icon: "ShieldCheck" },
            ],
        },
        {
            name: "Languages & DataOps",
            skills: [
                { name: "Python (Data Engineering)", level: "Expert", icon: "Code2" },
                { name: "Advanced SQL & Tuning", level: "Expert", icon: "Binary" },
                { name: "Terraform", level: "Intermediate", icon: "Boxes" },
                { name: "CI / CD & DataOps", level: "Advanced", icon: "GitBranch" },
            ],
        },
    ],

    projects: [
        {
            id: 1,
            title: "Portfolio Website - Personal Brand & Data Engineering Profile",
            category: "Frontend",
            featured: true,
            description: "A modern portfolio website showcasing my data engineering background, projects, experience, and technical expertise in a clean, responsive UI.",
            longDescription: "This portfolio was built to present my data engineering profile in a polished, accessible way using Next.js and modern frontend patterns. It highlights my work across data platforms, cloud architecture, and end-to-end engineering storytelling, while keeping the experience fast, responsive, and visually refined.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            tags: ["Next.js", "JavaScript", "Tailwind CSS", "Responsive UI", "Portfolio"],
            demoUrl: "https://portfolio-rakesh2212003.vercel.app/",
            githubUrl: "https://github.com/rakesh2212003/portfolio/",
            metric: "Responsive portfolio built for personal branding and career visibility",
        },
    ],

    experiences: [
        {
            period: "2024 - Present",
            role: "Data Engineer / ETL Developer",
            company: "Tata Consultancy Services (TCS)",
            location: "Kolkata, India",
            description: "Modeled dimensional star schemas, authored complex SQL transformations, and managed automated ingest from relational databases and REST APIs.",
            highlights: [
                "Automated daily financial and operational ETL pipelines, saving 30+ hours of manual data extraction weekly.",
                "Built automated data reconciliation scripts validating source-to-target row counts and checksum integrity.",
            ],
            skills: ["Python", "SQL", "PostgreSQL", "ETL", "Bash", "Git"],
        },
    ],

    education: [
        {
            degree: "Bachelor of Technology in Computer Science & Engineering",
            institution: "College of Engineering and Management, Kolaghat",
            period: "2020 - 2024",
            description: "Graduated with First Class with Distinction. Specialized in Algorithms, Software Engineering, and Database Management Systems.",
        },
    ],

    testimonials: [
        {
            quote: "Rakesh is a top-tier data engineer who combines deep distributed systems mastery with practical business impact. His lakehouse architecture reduced our cloud compute costs by 45% while enabling real-time analytics across our entire executive suite.",
            author: "Dr. Arvind Narayanan",
            role: "VP of Data & AI at Nexus Data Systems",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        },
        {
            quote: "The streaming pipeline Rakesh built with Kafka and Spark handled our peak transaction surge without dropping a single event—over 120 million messages processed flawlessly in a single day.",
            author: "Sarah Jenkins",
            role: "Director of Analytics at CloudVibe",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        },
        {
            quote: "Rakesh elevated our data platform maturity by establishing test-driven dbt workflows, automated Airflow DAGs, and bulletproof schema validation. Our data science team now has 100% trust in pipeline outputs.",
            author: "Karthik Raman",
            role: "Lead Machine Learning Architect",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        },
    ],
};
