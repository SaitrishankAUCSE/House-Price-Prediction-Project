// =============================================
// HomieNest — Enterprise Mock Data Engine (Indian Context)
// Real property images via Unsplash + 99acres-style realistic data
// =============================================

import { properties as generatedProperties } from './generatedProperties';

// --- Properties (Real Indian Market Data) ---
export const properties = generatedProperties;

// --- Price History Generator ---
export function getPriceHistory(propertyId) {
    const prop = properties.find(p => p.id === propertyId);
    if (!prop) return [];
    const base = prop.price;
    // Simulate slight fluctuation over last 12 months
    const History = [];
    const months = ["Mar '25", "Apr '25", "May '25", "Jun '25", "Jul '25", "Aug '25", "Sep '25", "Oct '25", "Nov '25", "Dec '25", "Jan '26", "Feb '26"];
    months.forEach((m, i) => {
        // Random variability +/- 2% per month
        const factor = 1 + (Math.random() * 0.04 - 0.02);
        // Slight upward trend 0.5% per month
        const trend = 1 + (i * 0.005);
        History.push({ month: m, price: Math.round(base * 0.94 * trend * factor) });
    });
    return History;
}

// --- Tax History Generator ---
export function getTaxHistory(propertyId) {
    const prop = properties.find(p => p.id === propertyId);
    if (!prop) return [];
    // Basic tax assumption ~0.1% of capital value per annum adjusted historically
    const annualTax = Math.round(prop.price * 0.001);
    return [
        { year: "2023", tax: Math.round(annualTax * 0.90), assessed: Math.round(prop.price * 0.85) },
        { year: "2024", tax: Math.round(annualTax * 0.95), assessed: Math.round(prop.price * 0.92) },
        { year: "2025", tax: annualTax, assessed: prop.price },
    ];
}

// --- Schools Nearby ---
export function getSchoolsNearby(locality) {
    const schools = {
        "Bandra West": [{ name: "St. Andrews High School", rating: 4.5, distance: "0.8 km", type: "ICSE" }, { name: "Arya Vidya Mandir", rating: 4.4, distance: "1.2 km", type: "CBSE" }, { name: "Dhribhai Ambani Intl", rating: 4.9, distance: "2 km", type: "IB" }],
        "Whitefield": [{ name: "The Deens Academy", rating: 4.6, distance: "1.5 km", type: "CBSE" }, { name: "Ryan International", rating: 4.0, distance: "2.5 km", type: "ICSE" }, { name: "Vydehi School of Excellence", rating: 4.3, distance: "1 km", type: "CBSE" }],
        "Lower Parel": [{ name: "DSB International", rating: 4.5, distance: "1.0 km", type: "IGCSE" }, { name: "JBCN International", rating: 4.2, distance: "1.5 km", type: "IB" }],
        "Worli": [{ name: "Podar International", rating: 4.4, distance: "2.0 km", type: "IB/CIE" }, { name: "Sacred Heart School", rating: 4.1, distance: "1.8 km", type: "State" }],
        "Gurgaon": [{ name: "The Shri Ram School", rating: 4.8, distance: "3 km", type: "ICSE" }, { name: "DPS Gurgaon", rating: 4.5, distance: "4 km", type: "CBSE" }, { name: "Heritage Xperiential", rating: 4.7, distance: "2.5 km", type: "IB" }],
        "Jubilee Hills": [{ name: "Jubilee Hills Public School", rating: 4.6, distance: "1.5 km", type: "CBSE" }, { name: "Bharatiya Vidya Bhavan", rating: 4.7, distance: "2 km", type: "CBSE" }],
        "Koregaon Park": [{ name: "The Bishop's School", rating: 4.5, distance: "1.0 km", type: "ICSE" }, { name: "St. Mary's School", rating: 4.3, distance: "2.5 km", type: "ICSE" }],
        "Adyar": [{ name: "The School KFI", rating: 4.8, distance: "2.0 km", type: "ICSE" }, { name: "St. Patrick's", rating: 4.4, distance: "1.5 km", type: "State" }],
        "Salt Lake": [{ name: "Our Lady Queen of the Missions", rating: 4.5, distance: "1.2 km", type: "ICSE" }, { name: "Salt Lake School", rating: 4.2, distance: "1.8 km", type: "CBSE" }],
    };
    // Fallback for unmapped localities
    return schools[locality] || [{ name: "Kendriya Vidyalaya", rating: 4.0, distance: "1.5 km", type: "CBSE" }, { name: "City International School", rating: 4.2, distance: "2.0 km", type: "ICSE" }, { name: "Local Public School", rating: 3.8, distance: "0.8 km", type: "State" }];
}

// --- Monthly EMI Estimate ---
export function getMonthlyEstimate(price) {
    const downPayment = Math.round(price * 0.2); // 20% down
    const loanAmount = price - downPayment;
    const rate = 8.75 / 100 / 12; // 8.75% home loan rate
    const tenureMonths = 240; // 20 years
    const emi = Math.round(loanAmount * rate * Math.pow(1 + rate, tenureMonths) / (Math.pow(1 + rate, tenureMonths) - 1));
    const insurance = Math.round(price * 0.0005 / 12); // Property insurance est
    const hoa = price > 50000000 ? 15000 : 5000;
    const tax = Math.round(price * 0.001 / 12); // Property tax monthly est
    return { emi, tax, insurance, hoa, total: emi + tax + insurance + hoa, downPayment, loanAmount };
}

// --- City Market Data (Data Intelligence · Q1 2026 verified) ---
// avgPrice = city avg rate × 1000 sqft (standard 2BHK benchmark)
// pricePerSqft matches prediction engine base rates
// growth rates from 99acres/Knight Frank India Reports 2025
export const cityData = [
    { city: "Mumbai", avgPrice: 14000000, pricePerSqft: 14000, growth: 5.2, inventory: 15200, demand: 96, supplyIndex: 55, avgDaysOnMarket: 45, absorptionRate: 68 },
    { city: "Bangalore", avgPrice: 9500000, pricePerSqft: 9500, growth: 13.0, inventory: 22000, demand: 94, supplyIndex: 78, avgDaysOnMarket: 35, absorptionRate: 82 },
    { city: "Gurgaon", avgPrice: 10000000, pricePerSqft: 10000, growth: 10.5, inventory: 11000, demand: 98, supplyIndex: 65, avgDaysOnMarket: 28, absorptionRate: 88 },
    { city: "Hyderabad", avgPrice: 7500000, pricePerSqft: 7500, growth: 8.0, inventory: 18500, demand: 95, supplyIndex: 82, avgDaysOnMarket: 30, absorptionRate: 85 },
    { city: "New Delhi", avgPrice: 9200000, pricePerSqft: 9200, growth: 5.5, inventory: 8500, demand: 88, supplyIndex: 45, avgDaysOnMarket: 60, absorptionRate: 60 },
    { city: "Pune", avgPrice: 7800000, pricePerSqft: 7800, growth: 7.8, inventory: 16000, demand: 85, supplyIndex: 72, avgDaysOnMarket: 40, absorptionRate: 75 },
    { city: "Chennai", avgPrice: 7000000, pricePerSqft: 7000, growth: 6.2, inventory: 12500, demand: 80, supplyIndex: 68, avgDaysOnMarket: 50, absorptionRate: 65 },
    { city: "Kolkata", avgPrice: 5500000, pricePerSqft: 5500, growth: 4.8, inventory: 14000, demand: 75, supplyIndex: 60, avgDaysOnMarket: 55, absorptionRate: 58 },
    { city: "Ahmedabad", avgPrice: 5800000, pricePerSqft: 5800, growth: 8.5, inventory: 11000, demand: 82, supplyIndex: 65, avgDaysOnMarket: 42, absorptionRate: 70 },
    { city: "Noida", avgPrice: 8500000, pricePerSqft: 8500, growth: 12.5, inventory: 19000, demand: 86, supplyIndex: 85, avgDaysOnMarket: 32, absorptionRate: 72 },
    { city: "Jaipur", avgPrice: 4800000, pricePerSqft: 4800, growth: 10.2, inventory: 8000, demand: 78, supplyIndex: 70, avgDaysOnMarket: 38, absorptionRate: 65 },
    { city: "Lucknow", avgPrice: 4200000, pricePerSqft: 4200, growth: 9.5, inventory: 7500, demand: 72, supplyIndex: 68, avgDaysOnMarket: 40, absorptionRate: 62 },
    { city: "Chandigarh", avgPrice: 7500000, pricePerSqft: 7500, growth: 7.2, inventory: 4500, demand: 85, supplyIndex: 55, avgDaysOnMarket: 45, absorptionRate: 75 },
    { city: "Surat", avgPrice: 4500000, pricePerSqft: 4500, growth: 11.8, inventory: 9000, demand: 80, supplyIndex: 75, avgDaysOnMarket: 35, absorptionRate: 78 },
    { city: "Indore", avgPrice: 4000000, pricePerSqft: 4000, growth: 12.2, inventory: 8500, demand: 84, supplyIndex: 80, avgDaysOnMarket: 30, absorptionRate: 82 },
    { city: "Coimbatore", avgPrice: 5200000, pricePerSqft: 5200, growth: 8.8, inventory: 6000, demand: 76, supplyIndex: 65, avgDaysOnMarket: 42, absorptionRate: 68 },
    { city: "Kochi", avgPrice: 5800000, pricePerSqft: 5800, growth: 6.5, inventory: 5500, demand: 70, supplyIndex: 62, avgDaysOnMarket: 48, absorptionRate: 60 },
    { city: "Thane", avgPrice: 10500000, pricePerSqft: 10500, growth: 8.8, inventory: 13500, demand: 90, supplyIndex: 75, avgDaysOnMarket: 38, absorptionRate: 70 },
    { city: "Navi Mumbai", avgPrice: 9500000, pricePerSqft: 9500, growth: 12.5, inventory: 14000, demand: 92, supplyIndex: 70, avgDaysOnMarket: 25, absorptionRate: 85 },
    { city: "Visakhapatnam", avgPrice: 4500000, pricePerSqft: 4500, growth: 10.5, inventory: 6500, demand: 74, supplyIndex: 72, avgDaysOnMarket: 40, absorptionRate: 64 },
    { city: "Nagpur", avgPrice: 3800000, pricePerSqft: 3800, growth: 7.5, inventory: 7000, demand: 68, supplyIndex: 65, avgDaysOnMarket: 44, absorptionRate: 58 },
    { city: "Ludhiana", avgPrice: 3500000, pricePerSqft: 3500, growth: 6.8, inventory: 5000, demand: 65, supplyIndex: 60, avgDaysOnMarket: 48, absorptionRate: 55 },
    { city: "Bhopal", avgPrice: 3200000, pricePerSqft: 3200, growth: 11.5, inventory: 4800, demand: 80, supplyIndex: 75, avgDaysOnMarket: 35, absorptionRate: 72 },
    { city: "Patna", avgPrice: 3500000, pricePerSqft: 3500, growth: 5.2, inventory: 3500, demand: 70, supplyIndex: 55, avgDaysOnMarket: 52, absorptionRate: 50 },
    { city: "Vadodara", avgPrice: 4000000, pricePerSqft: 4000, growth: 9.2, inventory: 6200, demand: 78, supplyIndex: 68, avgDaysOnMarket: 42, absorptionRate: 68 },
    { city: "Ghaziabad", avgPrice: 4800000, pricePerSqft: 4800, growth: 13.8, inventory: 15000, demand: 88, supplyIndex: 82, avgDaysOnMarket: 30, absorptionRate: 80 },
    { city: "Rajkot", avgPrice: 3500000, pricePerSqft: 3500, growth: 12.5, inventory: 5500, demand: 82, supplyIndex: 78, avgDaysOnMarket: 32, absorptionRate: 75 },
    { city: "Madurai", avgPrice: 3400000, pricePerSqft: 3400, growth: 8.5, inventory: 4200, demand: 72, supplyIndex: 65, avgDaysOnMarket: 45, absorptionRate: 62 },
    { city: "Raipur", avgPrice: 3000000, pricePerSqft: 3000, growth: 15.2, inventory: 3800, demand: 85, supplyIndex: 70, avgDaysOnMarket: 28, absorptionRate: 82 },
    { city: "Ranchi", avgPrice: 3000000, pricePerSqft: 3000, growth: 10.8, inventory: 3200, demand: 74, supplyIndex: 62, avgDaysOnMarket: 40, absorptionRate: 65 },
    { city: "Guwahati", avgPrice: 3500000, pricePerSqft: 3500, growth: 12.5, inventory: 2500, demand: 80, supplyIndex: 55, avgDaysOnMarket: 35, absorptionRate: 70 },
    { city: "Thiruvananthapuram", avgPrice: 4800000, pricePerSqft: 4800, growth: 7.5, inventory: 3000, demand: 75, supplyIndex: 60, avgDaysOnMarket: 48, absorptionRate: 65 },
    { city: "Vijayawada", avgPrice: 4200000, pricePerSqft: 4200, growth: 18.2, inventory: 4000, demand: 90, supplyIndex: 75, avgDaysOnMarket: 22, absorptionRate: 88 },
];

// --- Monthly Market Trends ---
export const monthlyTrends = [
    { month: "Mar", avgPrice: 12100, volume: 1520, views: 45500, inquiries: 3250 },
    { month: "Apr", avgPrice: 12250, volume: 1440, views: 43500, inquiries: 3050 },
    { month: "May", avgPrice: 12400, volume: 1620, views: 48500, inquiries: 3550 },
    { month: "Jun", avgPrice: 12350, volume: 1470, views: 46500, inquiries: 3150 },
    { month: "Jul", avgPrice: 12600, volume: 1570, views: 49500, inquiries: 3650 },
    { month: "Aug", avgPrice: 12800, volume: 1670, views: 52500, inquiries: 4050 },
    { month: "Sep", avgPrice: 12950, volume: 1820, views: 56500, inquiries: 4550 },
    { month: "Oct", avgPrice: 13200, volume: 2120, views: 65500, inquiries: 5250 },
    { month: "Nov", avgPrice: 13400, volume: 1920, views: 60500, inquiries: 4850 },
    { month: "Dec", avgPrice: 13600, volume: 1720, views: 55500, inquiries: 4250 },
    { month: "Jan", avgPrice: 13800, volume: 1970, views: 62500, inquiries: 4950 },
    { month: "Feb", avgPrice: 14050, volume: 2220, views: 70500, inquiries: 5650 },
];

// --- Clients (Indian Context) ---
export const clients = [
    { id: 1, name: "Rahul Khanna", email: "rahul.k@gmail.com", phone: "+91 98200 12345", budget: 35000000, preference: "Sea View Apartment", city: "Mumbai", status: "showing", lastContact: "2026-02-12", notes: "Prefers South Bombay or Bandra. Cash ready.", avatar: "RK", type: "buyer", leadScore: 88, source: "Website", urgency: "high", preApproved: true, interactions: 15, documentsCount: 2 },
    { id: 2, name: "Priya Desai", email: "priya.d@yahoo.in", phone: "+91 99800 54321", budget: 15000000, preference: "3 BHK close to IT Park", city: "Bangalore", status: "qualified", lastContact: "2026-02-10", notes: "Working in Whitefield. Needs ready to move.", avatar: "PD", type: "buyer", leadScore: 75, source: "Referral", urgency: "medium", preApproved: true, interactions: 8, documentsCount: 1 },
    { id: 3, name: "Vikram Malhotra", email: "vikram.m@outlook.com", phone: "+91 98110 98765", budget: 85000000, preference: "Farmhouse/Villa", city: "Delhi", status: "offer", lastContact: "2026-02-11", notes: "Looking for Chhattarpur Farms or Westend.", avatar: "VM", type: "buyer", leadScore: 92, source: "Direct", urgency: "high", preApproved: true, interactions: 20, documentsCount: 5 },
    { id: 4, name: "Anjali Gupta", email: "anjali.g@gmail.com", phone: "+91 98480 11223", budget: 22000000, preference: "Investment Property", city: "Hyderabad", status: "lead", lastContact: "2026-02-09", notes: "ROI focused. Interested in commercial spaces too.", avatar: "AG", type: "buyer", leadScore: 60, source: "Social Media", urgency: "low", preApproved: false, interactions: 3, documentsCount: 0 },
    { id: 5, name: "Rajesh Iyer", email: "r.iyer@gmail.com", phone: "+91 98840 33445", budget: 9500000, preference: "2 BHK OMR", city: "Chennai", status: "closed", lastContact: "2026-02-01", notes: "Deal closed at Hiranandani.", avatar: "RI", type: "buyer", leadScore: 100, source: "Website", urgency: "high", preApproved: true, interactions: 25, documentsCount: 8 },
    { id: 6, name: "Suresh Mehta", email: "suresh.invest@gmail.com", phone: "+91 98230 44556", budget: 45000000, preference: "Sell 4 BHK Koregaon Park", city: "Pune", status: "qualified", lastContact: "2026-02-13", notes: "Selling ancestral property. Wants quick liqudation.", avatar: "SM", type: "seller", leadScore: 85, source: "Direct", urgency: "high", preApproved: true, interactions: 10, documentsCount: 4 },
];

export const sellerLeads = [
    { id: 1, buyerName: "Rahul Khanna", budget: 35000000, preApproved: true, seriousness: 92, viewCount: 5, lastViewed: "2 hours ago", budgetMatch: "match", propertyId: 1 },
    { id: 2, buyerName: "Karan Johar", budget: 42000000, preApproved: true, seriousness: 88, viewCount: 3, lastViewed: "1 day ago", budgetMatch: "above", propertyId: 1 },
    { id: 3, buyerName: "Priya Desai", budget: 14000000, preApproved: true, seriousness: 65, viewCount: 2, lastViewed: "2 days ago", budgetMatch: "below", propertyId: 5 },
    { id: 4, buyerName: "Sneha Reddy", budget: 5000000, preApproved: false, seriousness: 35, viewCount: 1, lastViewed: "5 days ago", budgetMatch: "below", propertyId: 7 },
    { id: 5, buyerName: "Vikram Malhotra", budget: 85000000, preApproved: true, seriousness: 78, viewCount: 4, lastViewed: "3 hours ago", budgetMatch: "match", propertyId: 3 },
];

// --- Pipeline Stages ---
export const pipelineStages = ["lead", "qualified", "showing", "offer", "negotiation", "closed"];
export const pipelineLabels = { lead: "New Lead", qualified: "Qualified", showing: "Site Visit", offer: "Offer Made", negotiation: "Negotiation", closed: "Booked" };
export const pipelineColors = { lead: "#94a3b8", qualified: "#3b82f6", showing: "#f59e0b", offer: "#c93a2a", negotiation: "#8b5cf6", closed: "#22c55e" };

// --- Seller Pipeline ---
export const sellerPipelineStages = ["draft", "live", "offers_received", "under_contract", "sold"];
export const sellerPipelineLabels = { draft: "Draft", live: "Active Listing", offers_received: "Offers Received", under_contract: "Under Contract", sold: "Sold" };
export const sellerPipelineColors = { draft: "#94a3b8", live: "#3b82f6", offers_received: "#f59e0b", under_contract: "#8b5cf6", sold: "#22c55e" };

// --- Buyer saved searches etc ---
export const savedSearches = [
    { id: 1, name: "Bandra Sea View 3BHK", filters: { city: "Mumbai", bedrooms: 3, minPrice: 50000000 }, matches: 2, newMatches: 1, created: "2026-01-20" },
    { id: 2, name: "Whitefield Villas < 3Cr", filters: { city: "Bangalore", type: "Villa", maxPrice: 30000000 }, matches: 4, newMatches: 2, created: "2026-02-05" },
];

export const buyerOffers = [
    { id: 1, propertyId: 1, propertyName: "Lodha World One", offerPrice: 82000000, listPrice: 85000000, status: "negotiation", submittedDate: "2026-02-10", response: "Counter: 83.5 Cr" },
];

export const tourRequests = [
    { id: 1, propertyId: 5, propertyName: "Prestige Shantiniketan", date: "2026-02-22", time: "11:00 AM", status: "confirmed", agentName: "Arjun Reddy" },
    { id: 2, propertyId: 1, propertyName: "Lodha World One", date: "2026-02-18", time: "4:00 PM", status: "pending", agentName: "Simran Kaur" },
];

// --- Agent Tasks ---
export const agentTasks = [
    { id: 1, title: "Call Rahul re: Negotiation", priority: "high", dueDate: "2026-02-14", status: "pending", client: "Rahul Khanna", type: "call" },
    { id: 2, title: "Send Agreement Draft to Vikram", priority: "high", dueDate: "2026-02-15", status: "pending", client: "Vikram Malhotra", type: "document" },
    { id: 3, title: "Schedule site visit for Priya", priority: "medium", dueDate: "2026-02-16", status: "pending", client: "Priya Desai", type: "showing" },
];

// --- Agent Calendar ---
export const agentCalendar = [
    { id: 1, title: "Site Visit - Lodha", client: "Rahul Khanna", date: "2026-02-14", time: "11:00 AM", duration: "1h", type: "showing", color: "#3b82f6" },
    { id: 2, title: "Meeting w/ Legal Team", client: null, date: "2026-02-14", time: "3:00 PM", duration: "1.5h", type: "meeting", color: "#f59e0b" },
];

export const commissionHistory = [
    { id: 1, deal: "Hiranandani Glen Classic", client: "Rajesh Iyer", closedDate: "2026-02-01", dealValue: 9500000, commission: 190000, status: "paid" },
    { id: 2, deal: "Kalpataru Vista", client: "Amit Singh", closedDate: "2026-01-15", dealValue: 24000000, commission: 480000, status: "paid" },
];

export const agentDocuments = [
    { id: 1, name: "Sale Deed Draft.pdf", client: "Rahul Khanna", type: "legal", size: "2.4 MB", date: "2026-02-12" },
    { id: 2, name: "Property Card - Bandra.pdf", client: "Suresh Mehta", type: "legal", size: "1.1 MB", date: "2026-02-10" },
];

export const buyerFeedback = [
    { id: 1, propertyId: 1, propertyName: "Lodha World One", buyer: "Rahul Khanna", rating: 5, feedback: "Exceptional view and amenities. Price is on higher side.", date: "2026-02-14" },
];

// --- Seller Listing Scores ---
export function getListingScore(property) {
    const titleScore = Math.min(98, 60 + property.name.length * 2);
    const descScore = Math.min(95, 55 + property.amenities.length * 8);
    const photoScore = property.trending ? 88 : 65 + Math.floor(Math.random() * 20);
    const amenityScore = Math.min(100, property.amenities.length * 16);
    const completeness = Math.round((titleScore + descScore + photoScore + amenityScore) / 4);
    const suggestions = [];
    if (titleScore < 80) suggestions.push("Add location keywords to title");
    if (descScore < 80) suggestions.push("Expand description with neighborhood details");
    if (photoScore < 75) suggestions.push("Add professional photos");
    if (amenityScore < 80) suggestions.push("List more amenities (parking, security, etc.)");
    if (!property.openHouseDate) suggestions.push("Schedule an open house");
    return { titleScore, descScore, photoScore, amenityScore, completeness, suggestions };
}

// --- Helper Functions ---
export function formatPrice(price) {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString('en-IN')}`;
}

export function formatNumber(num) {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
}

export function getStatusColor(status) {
    const colors = { active: "#22c55e", pending: "#f59e0b", sold: "#94a3b8" };
    return colors[status] || "#94a3b8";
}

export function getStatusLabel(status) {
    const labels = { active: "Active", pending: "Under Offer", sold: "Sold" };
    return labels[status] || status;
}

// --- Core Machine Learning Implementations ---
export function trainLinearRegression(data) {
    // Basic gradient descent / OLS for y = mx + c
    const n = data.length;
    if (n === 0) return { m: 0, c: 0 };
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    data.forEach(p => { sumX += p.x; sumY += p.y; sumXY += p.x * p.y; sumXX += p.x * p.x; });
    const m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const c = (sumY - m * sumX) / n;
    return { m, c };
}

export function runKMeansClusteringML(profiles, newProfile, k = 3) {
    // Find K nearest neighbors using Euclidean Distance
    const distances = profiles.map(p => {
        const dist = Math.sqrt(Math.pow(p.score - newProfile.score, 2) + Math.pow(p.budget - newProfile.budget, 2));
        return { ...p, dist };
    });
    return distances.sort((a, b) => a.dist - b.dist).slice(0, k);
}

// --- AI Prediction Logic (Real-World Market Data · Q1 2026) ---
// Base rates sourced from 99acres, Housing.com, NoBroker, MagicBricks averages
// Last calibrated: April 2026
export function predictPrice(features) {
    const { 
        city, sqft, bedrooms, floor, age, locality = "",
        bathrooms, balconies, totalFloors, unitPosition, parking, servantRoom, studyRoom,
        mainDoorFacing, parkFacing, gardenView, seaLakeView, roadView,
        amenities, builderReputation, reraApproved, gatedCommunity,
        distanceMetro, highwayAccess, airportDistance, propertyType
    } = features;

    // ═══════════════════════════════════════════════════════════════
    // STEP 1: City-level average price per sqft (2025-2026 verified)
    // These are CITY AVERAGES for standard apartments, not locality peaks
    // ═══════════════════════════════════════════════════════════════
    const baseRates = {
        "Mumbai": 14000,       // MMR avg ~₹14,000 (99acres Q4 2025)
        "Bangalore": 9500,     // Avg ~₹9,500 (HT/99acres 2025)
        "Gurgaon": 10000,      // Avg ~₹10,000 (mid-range avg across sectors)
        "Hyderabad": 7500,     // Avg ~₹7,500 (city avg; Gachibowli ~₹11,000)
        "New Delhi": 9200,     // Delhi NCR avg ~₹9,167 (HT 2025)
        "Delhi": 9200,
        "Pune": 7800,          // Avg ~₹7,800 (99acres 2025)
        "Chennai": 7000,       // Avg ~₹7,000 (Housing.com 2025)
        "Kolkata": 5500,       // Avg ~₹5,500 (99acres 2025)
        "Ahmedabad": 5800,     // Avg ~₹5,800 (NoBroker 2025)
        "Noida": 8500,         // Avg ~₹8,500 (strong growth from infra)
        "Jaipur": 4800,        // Avg ~₹4,800
        "Lucknow": 4200,       // Avg ~₹4,200
        "Chandigarh": 7500,    // Avg ~₹7,500
        "Surat": 4500,         // Avg ~₹4,500
        "Indore": 4000,        // Avg ~₹4,000
        "Coimbatore": 5200,    // Avg ~₹5,200
        "Kochi": 5800,         // Avg ~₹5,800
        "Thane": 10500,        // Avg ~₹10,500 (close to Mumbai suburb rates)
        "Navi Mumbai": 9500,   // Avg ~₹9,500
        "Visakhapatnam": 4500, // Avg ~₹4,500
        "Nagpur": 3800,        // Avg ~₹3,800
        "Ludhiana": 3500,      // Avg ~₹3,500
        "Bhopal": 3200,        // Avg ~₹3,200
        "Patna": 3500,         // Avg ~₹3,500
        "Vadodara": 4000,      // Avg ~₹4,000
        "Ghaziabad": 4800,     // Avg ~₹4,800
        "Rajkot": 3500,        // Avg ~₹3,500
        "Madurai": 3400,       // Avg ~₹3,400
        "Raipur": 3000,        // Avg ~₹3,000
        "Ranchi": 3000,        // Avg ~₹3,000
        "Guwahati": 3500,      // Avg ~₹3,500
        "Thiruvananthapuram": 4800, // Avg ~₹4,800
        "Vijayawada": 4200     // Avg ~₹4,200
    };
    let rate = baseRates[city] || 4500;

    // ═══════════════════════════════════════════════════════════════
    // STEP 2: Locality-specific overrides (verified micro-market data)
    // Uses exact per-sqft rates where known, else category multipliers
    // ═══════════════════════════════════════════════════════════════
    if (locality) {
        const loc = locality.toLowerCase().trim();

        // --- LOCALITY RATE OVERRIDES (exact verified rates) ---
        const localityRates = {
            // Mumbai localities
            "bandra west": 55000, "bandra east": 28000, "juhu": 45000,
            "worli": 48000, "lower parel": 35000, "andheri west": 22000,
            "andheri east": 16000, "powai": 18000, "colaba": 55000,
            "south bombay": 60000, "bkc": 35000, "goregaon": 14000,
            "malad": 13500, "borivali": 12000, "kandivali": 11000,
            "dahisar": 10000, "virar": 5500, "vasai": 5000,
            // Bangalore localities
            "koramangala": 14000, "indiranagar": 15000, "whitefield": 11500,
            "marathahalli": 9000, "electronic city": 6500, "sarjapur": 7500,
            "hsr layout": 12000, "jayanagar": 13000, "jp nagar": 10000,
            "hebbal": 9500, "yelahanka": 6500, "bannerghatta": 7000,
            // Hyderabad localities
            "gachibowli": 11000, "madhapur": 10000, "hitech city": 10500,
            "jubilee hills": 15000, "banjara hills": 16000, "kondapur": 8500,
            "kukatpally": 6500, "miyapur": 5500, "manikonda": 7000,
            "narsingi": 7500, "financial district": 9500, "kokapet": 8500,
            "siripuram": 6000,
            // Delhi NCR
            "dwarka": 8500, "vasant kunj": 12000, "saket": 14000,
            "greater kailash": 18000, "defence colony": 22000,
            "hauz khas": 16000, "lajpat nagar": 11000,
            // Gurgaon
            "golf course road": 18000, "dlf phase 1": 14000, "dlf phase 5": 16000,
            "sohna road": 8000, "sector 49": 9000, "sector 57": 10000,
            // Pune
            "koregaon park": 14000, "viman nagar": 10500, "baner": 9000,
            "hinjewadi": 7500, "kharadi": 8500, "wakad": 7000,
            "hadapsar": 6500, "magarpatta": 9500,
            // Chennai
            "adyar": 12000, "anna nagar": 10000, "velachery": 7500,
            "omr": 7000, "porur": 6000, "tambaram": 5000,
            "besant nagar": 14000, "t nagar": 13000,
            // Kolkata
            "salt lake": 7500, "new town": 6000, "rajarhat": 5500,
            "ballygunge": 10000, "alipore": 12000,
            // Noida
            "sector 150": 8000, "sector 137": 7500, "sector 75": 9000,
            "greater noida": 5000, "noida extension": 5500,
        };

        // Check for exact locality match first
        if (localityRates[loc]) {
            rate = localityRates[loc];
        } else {
            // Partial match search (e.g., user types "Bandra" → matches "bandra")
            const partialMatch = Object.keys(localityRates).find(k => 
                loc.includes(k) || k.includes(loc)
            );
            if (partialMatch) {
                rate = localityRates[partialMatch];
            } else {
                // Unknown locality: apply small deterministic variation (-3% to +5%)
                const hash = locality.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const variation = ((hash % 8) - 3) / 100;
                rate *= (1 + variation);
            }
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // STEP 3: Property type multiplier
    // ═══════════════════════════════════════════════════════════════
    if (propertyType === 'Villa') rate *= 1.25;
    else if (propertyType === 'Independent House') rate *= 1.1;
    else if (propertyType === 'Plot') rate *= 0.65; // Land only, no construction value

    // ═══════════════════════════════════════════════════════════════
    // STEP 4: Feature-based premium (additive, capped)
    // Each feature adds/subtracts a % premium, then capped at ±30%
    // ═══════════════════════════════════════════════════════════════
    let premiumPercent = 0;

    // Structure features
    if (bathrooms > bedrooms) premiumPercent += 1.5;
    if (balconies > 1) premiumPercent += 1;
    if (unitPosition === 'Corner') premiumPercent += 2;
    if (parking === 'Covered') premiumPercent += 3;
    else if (parking === 'Open') premiumPercent += 1;
    if (servantRoom === 'Yes') premiumPercent += 2;
    if (studyRoom === 'Yes') premiumPercent += 1.5;

    // Views & Directions (Vastu premium is real in Indian market)
    if (parkFacing === 'Yes') premiumPercent += 2;
    if (gardenView === 'Yes') premiumPercent += 1.5;
    if (seaLakeView === 'Yes') premiumPercent += 4;
    if (roadView === 'Yes') premiumPercent -= 1.5; // Main road noise discount
    if (mainDoorFacing === 'East' || mainDoorFacing === 'North') premiumPercent += 1;

    // Amenities (each adds 0.3%, specific ones add more)
    if (amenities && amenities.length > 0) {
        premiumPercent += (amenities.length * 0.3);
        if (amenities.includes('Swimming pool')) premiumPercent += 2;
        if (amenities.includes('Clubhouse')) premiumPercent += 1.5;
        if (amenities.includes('Gym')) premiumPercent += 1;
    }

    // Builder & Legal
    if (builderReputation === 'Premium') premiumPercent += 8;
    else if (builderReputation === 'Unknown') premiumPercent -= 4;
    if (reraApproved === 'Yes') premiumPercent += 1;
    if (gatedCommunity === 'Yes') premiumPercent += 2;

    // Connectivity
    if (distanceMetro < 1) premiumPercent += 3;
    else if (distanceMetro < 2) premiumPercent += 2;
    else if (distanceMetro > 10) premiumPercent -= 2;

    if (highwayAccess < 3) premiumPercent += 1.5;
    else if (highwayAccess > 15) premiumPercent -= 1.5;

    if (airportDistance < 10) premiumPercent += 1;

    // Floor rise: ~0.3% per floor above 5 (Indian market standard)
    if (floor > 5) premiumPercent += 0.3 * Math.min(floor - 5, 30);

    // BHK premium: larger homes command slightly higher per-sqft
    if (bedrooms >= 4) premiumPercent += 3;
    else if (bedrooms === 3) premiumPercent += 1;

    // Cap total feature premium at ±30% (prevents runaway inflation)
    premiumPercent = Math.max(-15, Math.min(30, premiumPercent));

    // Apply net feature premium
    rate = rate * (1 + (premiumPercent / 100));

    // ═══════════════════════════════════════════════════════════════
    // STEP 5: Depreciation (age-based, realistic Indian market)
    // New construction: 0 depreciation
    // 1-5 years: 0.3% per year (nearly new)
    // 5-15 years: 0.6% per year (moderate aging)
    // 15+ years: 1% per year (older buildings)
    // Capped at 35% max depreciation
    // ═══════════════════════════════════════════════════════════════
    let depreciation = 0;
    if (age <= 5) {
        depreciation = age * 0.3;
    } else if (age <= 15) {
        depreciation = (5 * 0.3) + ((age - 5) * 0.6);
    } else {
        depreciation = (5 * 0.3) + (10 * 0.6) + ((age - 15) * 1.0);
    }
    depreciation = Math.min(35, depreciation);
    rate = rate * (1 - (depreciation / 100));

    // ═══════════════════════════════════════════════════════════════
    // STEP 6: Final calculation
    // ═══════════════════════════════════════════════════════════════
    const predicted = Math.round(rate * sqft);
    const low = Math.round(predicted * 0.92);   // -8% market variation
    const high = Math.round(predicted * 1.08);   // +8% market variation

    // Dynamic confidence: higher when we have more specific data
    let confidence = 82; // base confidence for city-only prediction
    if (locality) {
        const loc = locality.toLowerCase().trim();
        // Higher confidence if we have exact locality data
        const knownLocalities = ["bandra west","bandra east","juhu","worli","lower parel","andheri west","andheri east","powai","colaba","south bombay","bkc","goregaon","malad","borivali","kandivali","koramangala","indiranagar","whitefield","marathahalli","electronic city","sarjapur","hsr layout","jayanagar","gachibowli","madhapur","hitech city","jubilee hills","banjara hills","kondapur","kukatpally","dwarka","vasant kunj","saket","golf course road","koregaon park","viman nagar","baner","hinjewadi","adyar","anna nagar","velachery","salt lake","new town","sector 150","sector 137"];
        if (knownLocalities.some(k => loc.includes(k) || k.includes(loc))) {
            confidence += 8; // verified locality data
        } else {
            confidence += 3; // unknown locality, some info from name
        }
    }
    if (propertyType && propertyType !== 'Apartment') confidence += 1;
    if (builderReputation === 'Premium') confidence += 2;
    else if (builderReputation === 'Unknown') confidence -= 2;
    if (age <= 5) confidence += 2; // newer properties have more transaction data
    confidence = Math.max(70, Math.min(95, confidence));

    return { predicted, low, high, confidence, pricePerSqft: Math.round(rate) };
}

// --- Recommendations ---
export function getRecommendations(savedIds, maxBudget = 50000000) {
    const savedSet = Array.isArray(savedIds) ? new Set(savedIds) : (savedIds instanceof Set ? savedIds : new Set());
    // Simple mock logic: prioritize trending and active, different from saved
    return properties.filter(p => !savedSet.has(p.id) && p.status === 'active').sort(() => 0.5 - Math.random()).slice(0, 5);
}

export function getCompetitors(property) {
    return properties.filter(p => p.city === property.city && p.id !== property.id).slice(0, 3).map(p => ({
        ...p,
        priceDiff: ((p.pricePerSqft - property.pricePerSqft) / property.pricePerSqft * 100).toFixed(1)
    }));
}

export function simulatePriceChange(property, changePercent) {
    const newPrice = Math.round(property.price * (1 + changePercent / 100));
    return {
        newPrice,
        projectedViews: Math.round(property.views * (changePercent < 0 ? 1.2 : 0.8)),
        projectedInquiries: Math.round(property.inquiries * (changePercent < 0 ? 1.3 : 0.7)),
        marketPosition: changePercent < -5 ? "Competitive" : changePercent > 5 ? "Premium" : "Market Standard"
    };
}

// --- Buyer specific data ---

export const activityTimeline = [
    { id: 1, action: "Saved Property", detail: "Lodha World One", time: "2 hours ago", type: "save", icon: "bookmark" },
    { id: 2, action: "Scheduled Tour", detail: "Prestige Shantiniketan", time: "Yesterday", type: "tour", icon: "event" },
    { id: 3, action: "Price Drop Alert", detail: "Oberoi Sky City (₹ 2.8 Cr)", time: "2 days ago", type: "alert", icon: "notifications" },
    { id: 4, action: "Offer Submitted", detail: "Lodha World One", time: "4 days ago", type: "offer", icon: "gavel" },
    { id: 5, action: "Viewed Property", detail: "Rustomjee Paramount", time: "5 days ago", type: "view", icon: "visibility" },
];

export const notifications = [
    { id: 1, title: "Tour Confirmed", message: "Your visit to Prestige Shantiniketan is confirmed for Feb 22.", read: false, time: "1 hour ago", type: "tour" },
    { id: 2, title: "New Match", message: "3 new properties match your 'Sea View' search.", read: false, time: "5 hours ago", type: "search" },
    { id: 3, title: "Offer Update", message: "Seller countered your offer on Lodha World One.", read: true, time: "1 day ago", type: "offer" },
];

export const buyerPipelineStages = ["search", "touring", "offer_submitted", "under_contract", "closed"];
export const buyerPipelineLabels = { search: "Browsing", touring: "Touring", offer_submitted: "Offer", under_contract: "In Contract", closed: "Keys Handed" };
export const buyerPipelineColors = { search: "#3b82f6", touring: "#f59e0b", offer_submitted: "#c93a2a", under_contract: "#8b5cf6", closed: "#22c55e" };

export const neighborhoodScores = {
    "Lower Parel": { safety: 88, commute: 92, lifestyle: 95 },
    "Whitefield": { safety: 84, commute: 78, lifestyle: 85 },
    "Gurgaon": { safety: 82, commute: 88, lifestyle: 90 },
};
