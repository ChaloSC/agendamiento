import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>
          Welcome to our scheduling service. By using our service, you agree to
          the following terms:
        </p>
        <h2>1. Use of Service</h2>
        <p>
          Our scheduling service is provided for personal and business use. You
          agree not to misuse the service or help anyone else do so.
        </p>
        <h2>2. Privacy</h2>
        <p>
          Your privacy is important to us. Please refer to our Privacy Policy
          for information on how we collect, use, and disclose your personal
          information.
        </p>
        <h2>3. Account Security</h2>
        <p>
          You are responsible for safeguarding the password that you use to
          access the service. We encourage you to use strong passwords and to
          keep them secure.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsOfService;
