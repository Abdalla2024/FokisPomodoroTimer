const PrivacyPage = () => {
  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: January 2025</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to PomodoroBird ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, store,
              and protect your information when you use our PomodoroBird productivity
              application ("App") on iOS devices.
            </p>
            <p>
              By using our App, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email address (if
                you choose to create an account)
              </li>
              <li>
                <strong>Productivity Data:</strong> Focus session durations,
                task completion status, productivity statistics
              </li>
              <li>
                <strong>Device Information:</strong> Device type, operating
                system version, unique device identifiers
              </li>
              <li>
                <strong>Usage Data:</strong> How you interact with the App,
                features used, and app performance data
              </li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>App usage statistics and crash reports</li>
              <li>Device performance and diagnostic data</li>
              <li>
                IP address and general location (country/region level only)
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>
                <strong>App Functionality:</strong> To provide and maintain the
                PomodoroBird app features, including timer functionality, task
                management, and bird collection system
              </li>
              <li>
                <strong>Personalization:</strong> To customize your experience
                and provide personalized productivity insights
              </li>
              <li>
                <strong>Analytics:</strong> To analyze app usage patterns and
                improve our services
              </li>
              <li>
                <strong>Communication:</strong> To respond to your inquiries
                and provide customer support
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Storage and Security</h2>
            <p>
              Your data is primarily stored locally on your device to ensure
              maximum privacy and security. We implement appropriate security
              measures to protect your information:
            </p>
            <ul>
              <li>Local data storage with device encryption</li>
              <li>Secure data transmission when syncing (if enabled)</li>
              <li>Regular security updates and vulnerability assessments</li>
              <li>Access controls and authentication measures</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Sharing and Third Parties</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your explicit consent,
              except in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share data with
                trusted third-party service providers who assist us in
                operating our app (e.g., analytics, crash reporting)
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or to protect our rights and safety
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, user information may be
                transferred as part of the business transaction
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li>
                <strong>Access:</strong> You can access and review your personal
                data stored in the app
              </li>
              <li>
                <strong>Deletion:</strong> You can delete your account and all
                associated data at any time
              </li>
              <li>
                <strong>Export:</strong> You can export your data in a
                machine-readable format
              </li>
              <li>
                <strong>Opt-out:</strong> You can opt out of certain data
                collection features in the app settings
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              PomodoroBird is not intended for use by children under the age of 13.
              We do not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has provided
              us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy in the app and
              updating the "Last updated" date. You are advised to review this
              Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="privacy-section">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:spareisle@gmail.com">spareisle@gmail.com</a>
              </p>
              <p>
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPage