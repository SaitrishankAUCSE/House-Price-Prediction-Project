# HomieNest: Project Architecture & UML Diagrams

---

## 1. System Macro-Architecture
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

## 2. Dynamic Valuation Pipeline
```mermaid
sequenceDiagram
    participant U as User (UI)
    participant A as API Handler
    participant YF as Yahoo Finance
    participant ML as ML Engine

    U->>A: Submit Property Features
    A->>YF: Fetch ^CNXREALTY
    A->>ML: MLEngine.predict(features)
    A-->>U: Final Enriched JSON
```

---

## 3. Buyer Transaction Lifecycle
```mermaid
stateDiagram-v2
    [*] --> Discovery
    Discovery --> PropertySelected
    PropertySelected --> AIValuation
    AIValuation --> Discovery
    AIValuation --> FinancialAnalysis
    FinancialAnalysis --> TourRequested
    TourRequested --> Negotiating
    Negotiating --> OfferSubmitted
    OfferSubmitted --> [*]
```

---

## 4. ML Feature Processing Logic
```mermaid
flowchart TD
    Start([Raw Property Features]) --> CityRate[Fetch Base City Rate]
    CityRate --> LocalityNode{Check Locality Tier}
    LocalityNode -- Premium --> P_Mult[+65%]
    LocalityNode -- Mid --> M_Mult[+25%]
    LocalityNode -- Standard --> B_Mult[Base]
    FloorAge --> FinalMerge[Final Calculation]
    FinalMerge --> Output([Valuation Result])
```

---

## 5. System Entity Relationships
```mermaid
erDiagram
    USER ||--o{ SAVED_PROPERTY : saves
    USER ||--o{ SAVED_SEARCH : triggers
    PROPERTY ||--|| ML_PREDICTION : generates
```
