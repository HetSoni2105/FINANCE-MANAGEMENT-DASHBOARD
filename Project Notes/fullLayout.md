# Full Layout of FMD

## Dashboard
- first page after login

### NavBar

Good Morning, Het                                                                                             
Theme Toggle
Profile Photo

### Content 
- Total Income Card
- Total Expense Card
- Outstanding Debt Card

- Add Expense Button

- Income vs Expense vs Debt Graph

- Latest Activity
(Date | Type | Category | Amount)

**Purpose**
- Quick Overview 
- quick access to adding records

---

## Add Expense
- to create the expense record

### Form
'''
Date

Type
├── Income
├── Expense
└── Debt

Category

From

To

Amount

Status
├── Completed
├── Pending
└── Scheduled

Note

[ Save ]

'''

**Purpose**
- Single place to create records

---

## History

### Top Section 
- Search Bar
- Filter Button

### Filters
1. Data range
2. Type 
3. Category
4. status

### Action
- view
- edit
- delete

**Purpose**
- Complete Management of Records

---

## Analytics 
- all analysis done here

### Section 1
Income vs Expense

### Section 2
Category Distribution

### Section 3 
Monthly Trend 

### Section 4
Debt Analysis
    Outstanding Debt
    Completed Debt
    Scheduled payment

**Purpose**
Financial insights

---

## Export

### Export Form
From Date

To date

Export Type
|- XLSX

[ Export ]

### Export Preview
Records Found

Date Range

Estimated Rows

**Purpose**
- Data extarction

---

## Profile
- Users details

### User Information
Profile Photo
User Name
Email

#### Defaults
Theme Preference
Default Currency
Date Format

### Account Action 
Change Password
Logout

---

## Final SideBar
Dashboard

Add Expense

History

Analytics

Export

Profile

## Records Format
Date
Type
Category
From
To
Amount
Status
Note

**Where**
Type
├── Income
├── Expense
└── Debt

Status
├── Completed
├── Pending
└── Scheduled

Category
├── Food
├── Transport
├── Shopping
├── Entertainment
├── Bills
├── Health
├── Education
├── Salary
├── Investment
└── Other

## Form Format

Amount
Date 
Type
Category
From
To
Status
Note


## Relationship in type-category

income(type)
|-salary
|-bonus
|-investment

expense(type)
|-food
|-transport
|-shopping
|-entertainment
|-health
|-education
|-bills

debt(type)
|-personal loans
|-borrowed
|-lent
|-credit