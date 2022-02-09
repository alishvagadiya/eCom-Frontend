import { v4 as uuid } from "uuid";

const advisorsDB = {
  data: [
    {
      id: uuid(),
      name: "Atul Mishra",
      price: 60000,
      rating: 4.5,
      category: ["Stock Market", "Mutual Fund", "Financial Planning"],
      yearsOfExperience: 13,
      location: "Mumbai",
      wfh: false,
      profile_URL: "https://res.cloudinary.com/futurewise/image/upload/v1611919159/advisor_profile_logo/nfbozplcjtmpbku6hvux.png",
      details: `- A proactive and analytical Financial Planning and Wealth Management consultant having vast experience in the financial services sector backed by senior level marketing and cross functional business, organizational and management experience. - Possesses extensive knowledge of financial products both domestic and international with experience in Comprehensive Financial planning, Investment Advisory/Wealth Management, Insurance analysis, Financial investment portfolios for individuals and families. Proven abilities and in built acumen for assessing an individuals financial requirements and risk bearing ability to propose a suitable financial plan. Specialized knowledge on UK pension transfers and offshore investments. - A good listener with the ability to pinpoint key issues in any situation and convincing communication and interpersonal skills in dealing with clients, business partners and external agencies; adapts easily to changed situations, continuously seeks to upgrade knowledge and stay abreast with changing technology / environment.`
    }, {
      id: uuid(),
      name: "Abhishek Mohta ",
      price: 48000,
      rating: 4.2,
      category: ["Financial Planning", "Insurance"],
      yearsOfExperience: 6,
      location: "kolkata",
      wfh: false,
      profile_URL: "https://res.cloudinary.com/futurewise/image/upload/v1602658066/advisor_profile_logo/zhyi96idlksmaqalrttb.png",
      details: `Experienced Founding Partner with a demonstrated history of working in the financial services industry. Skilled in Financial Services, Portfolio Management, Risk Management & Mutual Funds. Strong entrepreneurship professional graduated from University of Calcutta & a Certified Financial Planner from FPSB India.`
    }, {
      id: uuid(),
      name: "Manan Bapna",
      price: 51000,
      rating: 4.0,
      category: ["Mutual Fund", "Financial Planning", "Insurance"],
      yearsOfExperience: 3,
      location: "Jaipur",
      wfh: true,
      profile_URL: "https://res.cloudinary.com/futurewise/image/upload/v1639133542/advisor_profile_logo/yslfzdyxbw3yqt1on5ai.png",
      details: `I have more than 3 Years of experience in Financial Industry. Have worked with both Indian and MNC Banks and Mutual Fund Companies. Since 2017, advising my clients in all money matters.`
    }, {
      id: uuid(),
      name: "Mandira Gangakhedkar",
      price: 12000,
      rating: 4.5,
      category: ["Mutual Fund", "Financial Planning", "Insurance"],
      yearsOfExperience: 11,
      location: "Mumbai",
      wfh: true,
      profile_URL: "http://res.cloudinary.com/futurewise/image/upload/v1605084120/advisor_profile_logo/elpniknc4l2bnl0fwxjp.png",
      details: `Mandira Gangakhedkar, is a Certified Financial Planner (CFP) and consultant. She is a financial enthusiast & passionate about the personal finance with the 9 years of experience. She is working as a consultant financial planner at Manek Financial Advisors pvt. Ltd. where they help families by creating their life blueprint through holistic financial plans and handhold them in the achievement of their financial goals. She believes in self & organizational growth and love to improve the skillset.`
    }, {
      id: uuid(),
      name: "SLA Finserv Pvt Ltd",
      price: 75000,
      rating: 4.7,
      category: ["Stock Market", "Mutual Fund"],
      yearsOfExperience: 20,
      location: "Jaipur",
      wfh: false,
      profile_URL: "https://res.cloudinary.com/futurewise/image/upload/v1612245881/advisor_profile_logo/qmfbxxo3bvpxpzdsxmpu.png",
      details: `Ashish is the founder of SLA Financial Solutions, a leading Financial Advisory Firm based out of Jaipur and a Certified Financial Planner. He has an experience of over a decade in the financial services industry. After qualifying as a Chartered Accountant, Ashish worked as a business head in General Insurance division at Security Investments, where he found his passion for financial advisory and thus SLA was born. His proactive initiatives in the industry and do what's right have changed the way people perceive financial advisory which lead to the astronomical growth of SLA. Today, he leads a team of 16 people who cater more than 4500 clients. "‚Äã To him financial advisory is not a number game but about planning lives. He aspires to make financial planning a part of common man's life and to make their dreams come true. He believes "Do What's Right, Not What's Popular" which has eventually became the philosophy and driving force behind SLA.`
    }
  ]
};

export default advisorsDB;
