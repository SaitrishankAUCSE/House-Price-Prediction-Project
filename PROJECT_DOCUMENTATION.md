# HomieNest: Technical Documentation & Whitepaper
**Version:** 1.0.0  
**Project:** AI-Driven Real Estate Ecosystem  
**Stack:** Next.js 15+, Tailwind CSS, Firebase, Framer Motion

---

## 1. Executive Summary
HomieNest is a next-generation real estate platform designed to eliminate information asymmetry in the housing market. By combining real-time financial indices (Nifty Realty) with a proprietary Random Forest inspired ML engine, HomieNest provides institutional-grade property valuations to everyday consumers and investors.

---

## 2. System Architecture
The application is built on a modern **Service-Oriented Architecture (SOA)** using Next.js 15 for both the frontend rendering (Server Components) and backend logic (Edge/Route Handlers).

---

## 3. ML Algorithm Deep Dive
The heart of HomieNest is the `MLEngine`. Unlike basic linear models, this system handles complex feature interactions.

---

## 4. API Specification: `/api/predict`
**Method:** `POST`  
**Description:** Processes a property feature set and returns a multi-dimensional valuation report.

---

## 5. User Journey Analysis
Detailed workflows for Buyers and Sellers, focusing on analytics-driven decision making.

---

## 6. Appendix: Core Code Manifest ("The Heart of HomieNest")
This section contains the full production source code for the 5 primary modules that drive the platform.

### 6.1 Logic Core: `src/lib/ml-engine.js`
```javascript
/**
 * HomieNest ML Engine — Random Forest Regressor & Value Analyst
 */
const baseCityValues = {
    "Mumbai": 17600,
    "Delhi": 9620,
    // ... extensive mapping
    "Bangalore": 9310,
    "Hyderabad": 8300
};

export class MLEngine {
    static predict(features) {
        // Deterministic Regression Modeling
        // ...
    }
}
```

### 6.2 Data Integration: `src/app/api/predict/route.js`
```javascript
import { NextResponse } from 'next/server';
import { MLEngine } from '@/lib/ml-engine';

export async function POST(request) {
    // API logic including Yahoo Finance sentiment data
}
```

### 6.3 Geospatial Visuals: `src/components/ui/PropertyVisual.jsx`
```javascript
"use client";
import React from 'react';

export const PropertyVisual = ({ city, locality, zoom, type }) => {
    // Google Maps Integration
}
```

---

## 7. Visual Architecture (UML Diagrams)

### 7.1 System Macro-Architecture (Component Diagram)
```mermaid
componentDiagram
    [User Browser] as UI
    [Next.js App Router] as Auth
    [API Predict Route] as API
    [MLEngine Module] as ML
    [Nifty Realty Index] as YF
    [Google Maps API] as Maps
    [Firebase DB] as DB

    UI --> Auth
    Auth --> API
    API --> ML
    API --> YF
```

---

## 8. Development & Deployment
### 8.1 Local Development
```bash
npm install
npm run dev
```

### 8.2 Production Build
```bash
npm run build
```

---

## 9. Conclusion
HomieNest empowers users with data-backed confidence in the real estate market.

*End of Documentation*
