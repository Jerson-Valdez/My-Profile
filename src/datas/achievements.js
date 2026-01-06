const achievementImages = import.meta.glob('../assets/achievements/*.{png,jpg,jpeg,webp,svg}', { eager: true });

const getImagePath = (filename) => {
    const path = `../assets/achievements/${filename}`;
    return achievementImages[path]?.default || null;
}

export const achievements = [
    {
        "title": "Deans Listers",
        "category": "Academic",
        "date": "May 2025",
        "where": "Bulacan State University (Main Campus)",
        "description": "Academic excellence recognized for achieving Dean's List award for \"First Year 2nd Sem and Second Year 1st Sem of year 2024\" at Bulacan State University.",
        "image": getImagePath('deanslist2025.webp') 
    },
    {
        "title": "Agent Blazer Champion",
        "category": "Certification",
        "date": "September 2025",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Agent Blazer Champion Workshop' course through the SmartBridge Academy online at Bulacan State University. ",
        "image": getImagePath('agentblazer.png') 
    },
    {
        "title": "Salesforce Supported Virtual Internship Program",
        "category": "Certification",
        "date": "January 2026",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the selected trailhead modules and a capstone project during the 8-weeks virtual internship program from August to November 2025 at Bulacan State University. ",
        "image": getImagePath('skillwallet.webp') 
    },
    {
        "title": "Operating System Basics",
        "category": "Certification",
        "date": "March 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Operating Systems Basics' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('OperatingSystemBasics.png') 
    },
    {
        "title": "Network Support and Security",
        "category": "Certification",
        "date": "April 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Network Support and Security' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('NetworkSupportSecurity.png') 
    },
    {
        "title": "Networking Device and Initial Configuration",
        "category": "Certification",
        "date": "February 2025",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Networking Device and Initial Configuration' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('NetworkDevice.png') 
    },
    {
        "title": "Networking Basics",
        "category": "Certification",
        "date": "February 2025",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Networking Basics' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('NetworkBasics.png') 
    },
    {
        "title": "Introduction to IOT and Digital Transformation",
        "category": "Certification",
        "date": "November 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Introduction to IOT and Digital Transformation' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('IntroductionIOT.png') 
    },
    {
        "title": "Getting Started with Cisco packet Tracer",
        "category": "Certification",
        "date": "December 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Getting Started with Cisco packet Tracer' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('GettingStarted.png') 
    },
    {
        "title": "Exploring Network with Cisco Packet Tracer",
        "category": "Certification",
        "date": "December 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Exploring Network with Cisco Packet Tracer' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('ExploringNetwork.png') 
    },
    {
        "title": "Exploring IOT with Cisco Packet Tracer",
        "category": "Certification",
        "date": "November 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Exploring IOT with Cisco Packet Tracer' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('ExploringIOT.png') 
    },
    {
        "title": "Computer Hardware Basics",
        "category": "Certification",
        "date": "April 2024",
        "where": "Bulacan State University (Main Campus)",
        "description": "Recognized for completing the 'Computer Hardware Basics' course through the Cisco Networking Academy at Bulacan State University. ",
        "image": getImagePath('ComputerHardwareBasics.png') 
    }
]