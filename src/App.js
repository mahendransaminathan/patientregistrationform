import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  // Personal Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  // Address Information
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  // Insurance & Medical History
  const [insuranceName, setInsuranceName] = useState("");
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [otherMedicalHistory, setOtherMedicalHistory] = useState("");

  // Signature & Verification
  const [signature, setSignature] = useState("");
  const [verification, setVerification] = useState(false);

  const medicalConditions = [
    "Anemia",
    "Asthma",
    "Bronchitis",
    "Chickenpox",
    "Diabetes",
    "Pneumonia",
    "Thyroid Disease",
    "Ulcer",
    "Other",
  ];

  const handleMedicalHistoryChange = (condition) => {
    setMedicalHistory((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition]
    );
  };

  const options = ["Single", "Married", "Divorced", "Widnow"];

  const handleMaritalStatusChange = (option) => {
    setMaritalStatus((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      gender,
      phone,
      dob,
      maritalStatus,
      address: { street, city, state, zip, country },
      insuranceName,
      medicalHistory,
      otherMedicalHistory,
      signature,
      verification,
    };
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <h2 className="prfheader">Patient Registration Form</h2>
      <p className="prfparagraph">
        Thank you for applying to our practices. Please complete this patient registration form with your information.and a doctor will contact you shortly.
      </p>
      <hr className="line" />
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="name-grid">
        <label htmlFor="prn">Patient's Name</label>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="prfname" required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="prfname" required />
        </div>

        <div className="gender-grid">
        <label htmlFor="Gender">Gender</label>
        <label><input type="checkbox" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} required /> Male</label>
        <label><input type="checkbox" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} required /> Female</label>
        </div>

        <div className="phone-grid">
        <label htmlFor="phone">Phone</label>
        <input type="tel" placeholder="Phone (### ### ####)" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full" required />
        </div>
        
        <div className="dob-grid">
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="border p-2 w-full" required />
        </div>

        <div className="maritalstatus-grid">
        <label htmlFor="maritalStatus">Marital Status</label>        
          <div className="maritalstatuscheckbox-group">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={maritalStatus.includes(option)}
                onChange={() => handleMaritalStatusChange(option)}
              />
              {option}
            </label>
          ))}
          </div>
        </div>
        
        <div className="address-grid">
        
        <label htmlFor="street">Patient's Address</label>
        <input type="text" placeholder="Street Address" value={street} onChange={(e) => setStreet(e.target.value)} className="border p-2 w-full" required />
        
        <div className="fulladdress-grid">        
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="border p-2 w-full" required />        
        <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="border p-2 w-full" required />        
        <input type="text" placeholder="Postal / Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 w-full" required />        
        <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} className="border p-2 w-full" required />
        </div>
        </div>

        <div className="insurance-grid">
        {/* Insurance & Medical History */}
        <label htmlFor="insuranceName">Insurance Name</label>
        <input type="text" placeholder="Insurance Name" value={insuranceName} onChange={(e) => setInsuranceName(e.target.value)} className="border p-2 w-full" />
        </div>
        
        <div className="medicalhistory-grid">
        <label htmlFor="medicalHistory">Medical History</label>
        <div className="medicalhistorycheckbox-group">
        {medicalConditions.map((condition) => (
          <label key={condition}>
            <input type="checkbox" checked={medicalHistory.includes(condition)} onChange={() => handleMedicalHistoryChange(condition)} /> {condition}
          </label>
        ))}
        </div>
        </div>
        
        {/* Signature & Verification */}
        <label htmlFor="signature">Patient/Guardian Signature</label>
        <p className="text-gray-600 text-sm">
          According to our privacy policy and federal law, your information within this patient registration form will remain private at all times.
        </p>
        <input type="text" placeholder="Patient/Guardian Signature" value={signature} onChange={(e) => setSignature(e.target.value)} className="border p-2 w-full" required />
        
        
        <label>
          <input type="checkbox" checked={verification} onChange={() => setVerification(!verification)} required /> I verify that the information provided is accurate.
        </label>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">REGISTER</button>
        
      </form>
    </div>
  );
}

export default App;
