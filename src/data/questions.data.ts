const date = new Date();
const month = date.getMonth();
//months are 0 indexed
const july = 6;

//year depends on academic year Oct 2023 - June 2024 -> 24-25 school year
//fafsa is unavailable after june 30th for current school year
const academicYearStart =
  month >= july ? date.getFullYear() + 1 : date.getFullYear();
const academicYearEnd = academicYearStart + 1;
const priorPriorYear = academicYearStart - 2;
const priorYear = academicYearStart - 1;

const studentBasic = [
  { name: 'first_name', label: 'First name' },
  { name: 'middle_name', label: 'Middle name' },
  { name: 'last_name', label: 'Last name' },
  { name: 'phone_number', label: 'Phone number' },
  { name: 'email', label: 'Email' },
  { name: 'birth_date', label: 'Birth date' },
];

const studentDemographic = [
  { name: 'citizenship', label: 'Citizenship status' },
  { name: 'street_address', label: 'Street address' },
  { name: 'street_address_line2', label: 'Street address (Line 2)' },
  { name: 'city', label: 'City' },
  { name: 'state', label: 'State' },
  { name: 'zip', label: 'Zip' },
  { name: 'social', label: 'Social security' },
  {
    name: 'CBFinAidID',
    label: 'CBFinAidID',
    help: 'This is the ID that is given to the student if they have completed the CSS Profile before',
  },
];

const finances = [
  {
    name: 'were_taxes_filed',
    label: `Did student file federal tax return for ${priorPriorYear}?`,
    options: ['Already Completed', 'Planning to File', 'Not Going to File'],
  },
  {
    name: 'tax_return_type',
    label: 'What type of tax return filed',
    options: ['IRS 1040', 'Foreign Return', 'U.S. territories (PR,GU,AS,etc.)'],
  },
  {
    name: 'tax_filing_status',
    label: 'What is the tax filing status',
    options: [
      'Single',
      'Married, Filing Jointly',
      'Married. Filing Separately',
      'Head of Household',
      'Qualifying widow(er) With Dependent Child',
    ],
  },
  {
    name: 'will_submit_forms',
    label: 'Will you upload your tax forms',
  },
];

const completedTaxForms = [
  {
    name: 'filed_schedule_1',
    label: 'Did you file an IRS Schedule 1',
  },
  {
    name: 'filed_schedule_2',
    label: 'Did you file an IRS Schedule 2',
  },
  {
    name: 'filed_schedule_3',
    label: 'Did you file an IRS Schedule 3',
  },
];

const uploadTaxForms = [
  {
    name: 'IRS_1040',
    label: 'Upload your IRS 1040 form',
  },
  {
    name: 'IRS_schedule 1',
    label: 'Upload your IRS Schedule 1 form',
  },
  {
    name: 'IRS_schedule 2',
    label: 'Upload your IRS Schedule 1 form',
  },
  {
    name: 'IRS_schedule 3',
    label: 'Upload your IRS Schedule 1 form',
  },
];

const studentEarnings = [
  {
    name: 'income_earned_from_work',
    label: `Income earned from work in ${priorPriorYear}`,
  },
  {
    name: 'taxable_earnings',
    label: `Taxable earnings earned from need-based work 
        programs and taxable grant aid and scholarship aid 
        in ${priorPriorYear}`,
  },
  {
    name: 'untaxed_social_security',
    label: `Untaxed portion of any social security benefits in ${priorPriorYear}`,
  },
  {
    name: 'other_untaxed_income',
    label: `Any other untaxed income in ${priorPriorYear}`,
  },
];

const studentBenefits = [
  {
    name: 'expected_earnings_summer',
    label: `Expected earnings for summer of ${academicYearStart}`,
  },
  {
    name: 'expected_other_taxed_summer',
    label: `Expected other taxed income for summer of ${academicYearStart}`,
  },
  {
    name: 'expected_other_untaxed_summer',
    label: `Expected other untaxed income and benefits for summer of ${academicYearStart}`,
  },
  {
    name: 'expected_earnings_academic_year',
    label: `Expected earnings for academic year ${academicYearStart}-${academicYearEnd}`,
  },
  {
    name: 'expected_other_taxed_academic_year',
    label: `Expected other taxed income for academic year ${academicYearStart}-${academicYearEnd}`,
  },
  {
    name: 'expected_other_untaxed_academic_year',
    label: `Expected other untaxed income and benefits for academic year ${academicYearStart}-${academicYearEnd}`,
  },
];

const studentLife = [
  {
    name: 'marital_status',
    label: 'Marital Status',
    options: [
      'Married or in demestic partnership',
      'Seperated',
      'Divorced',
      'Unmarried, not living together',
      'Unmarried, living together',
    ],
  },
  { name: 'legal_dependants', label: 'Has any legal dependants' },
  {
    name: 'veteran',
    label: 'Is a veteran or currently serving on active duty',
  },
  {
    name: 'emancipated_minor',
    label: 'Was determined to be an emancipated minor',
  },
  {
    name: 'homeless',
    label: 'Was homeless or at risk of becoming homeless',
  },
  {
    name: 'ward_of_the_court',
    label: 'Was a ward of the court',
  },
  {
    name: 'foster_care',
    label: 'Was in foster care',
  },
];

const studentSchool = [
  {
    name: 'academic_year',
    label: 'current academic year grade level',
    options: [
      'High School',
      'First year undergraduate',
      'Second year undergraduate',
      'Third year undergraduate',
      'Fourth year undergraduate',
      'Graduate/Doctoral',
    ],
  },
];

const studentApplying = [
  // TODO: pull college list from API for autocomplete
  {
    name: 'college_name',
    label: 'Name of school you are applying to',
  },
  {
    // ! can get this information from previous question
    name: 'incoming_grade',
    label: `What is your grade level for ${academicYearStart} - ${academicYearEnd} academic year`,
  },
  {
    name: 'housing_status',
    label: 'Where will you be housing',
    options: ['On Campus', 'Off Campus', 'Living With Parent'],
  },
  {
    name: 'applied_before',
    label: 'Have you applied for financial aid here before',
  },
  {
    name: 'transfer',
    label: 'Are you transferring or considering transferring',
  },
];

const student1040 = [
  {
    name: 'adjusted_gross_income',
    label: 'Line 11 - Adjusted gross income',
  },
  {
    name: 'federal_taxes_paid',
    label: 'Line 22 - Federal taxes paid',
  },
  {
    name: 'taxable_interest',
    label: 'Line 2b - Taxable interest',
  },
  {
    name: 'ordinary_dividends',
    label: 'Line 3b - Ordinary dividends',
  },
  {
    name: 'deductions',
    label: 'Line 12c - Standard deduction or itemized deductions',
  },
];

const studentSchedule3 = {
  name: 'education_credits',
  label: 'Schedule 3 line 3 - Education credits',
};

const studentAssets = [
  {
    name: 'parent_help',
    label:
      'How much does student expect to receive from parents to pay for educational expenses',
  },
  {
    name: 'scholarship_help',
    label:
      'How much does student expect to receive from scholarships/grants other than from the colleges they are applying',
  },
  {
    name: 'employer_help',
    label:
      "How much does student expect to receive from employers (tuition benefits) including from parents' employer",
  },
  {
    name: 'relatives_help',
    label:
      'How much does student expect to receive from relatives other than parents',
  },
  {
    name: 'student_investments',
    label: 'Value of students investments',
  },
  {
    name: 'student_trust',
    label: 'Value of students trust',
  },
  {
    name: 'student_cash',
    label:
      'How much does student currently have in cash, savings, checking, deposit accounts',
  },
  {
    name: 'student_retirement',
    label: 'How much in student retirement assets',
  },
];
