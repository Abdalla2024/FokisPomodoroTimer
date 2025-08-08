import { useEffect } from 'react'

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: August 2025</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Fokis ("App"), you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, please do not use our App. These Terms constitute a legally binding agreement 
              between you and Fokis.
            </p>
          </section>

          <section className="privacy-section">
            <h2>App License</h2>
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
              revocable license to:
            </p>
            <ul>
              <li>Download and install Fokis on your personal iOS devices</li>
              <li>Use the App for personal, non-commercial purposes</li>
              <li>Create and manage your tasks and focus sessions</li>
              <li>Access the bird collection and gamification features</li>
              <li>Use all features included in your app version</li>
            </ul>
            <p>
              This license does not include the right to sublicense, sell, rent, lease, or otherwise distribute the App.
            </p>
          </section>

          <section className="privacy-section">
            <h2>User Responsibilities</h2>
            <p>You agree to use the App responsibly and in accordance with these Terms:</p>
            <ul>
              <li>Use the App for lawful purposes only</li>
              <li>Not attempt to reverse engineer, decompile, or modify the App</li>
              <li>Not use the App to violate any applicable laws or regulations</li>
              <li>Respect the intellectual property rights of the App and its content</li>
              <li>Not interfere with or disrupt the App's functionality</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data and Backups</h2>
            <p>
              Fokis does not require a user account. Your app data (e.g., tasks, focus sessions, settings, and collection
              progress) is stored locally on your device. We do not operate a backend service for syncing your data.
            </p>
            <ul>
              <li>You are responsible for maintaining the security of your device.</li>
              <li>Your app data may be included in iCloud device backups managed by Apple, depending on your iOS settings.</li>
              <li>Deleting the App removes locally stored data; backups can be managed from iOS Settings.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Service Availability</h2>
            <p>
              While we strive to provide a consistent and reliable experience, we cannot guarantee that Fokis or specific
              features will be available at all times. Availability may be affected by factors such as:
            </p>
            <ul>
              <li>Operating system updates or device compatibility changes</li>
              <li>App updates, maintenance, or bug fixes</li>
              <li>App Store policy or regional availability</li>
              <li>Security concerns or other operational reasons</li>
            </ul>
            <p>
              We may modify, suspend, or discontinue features at any time. Where practical, we will note material changes
              in the App or release notes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>In‑App Purchases</h2>
            <p>
              If Fokis offers in‑app purchases or subscriptions, payments are processed by Apple via StoreKit and the
              App Store. Prices and availability may change. Purchases, refunds, and billing issues are handled by Apple
              under the App Store terms and policies.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Third‑Party Services</h2>
            <p>
              Fokis does not include third‑party advertising or analytics SDKs. If you have opted in at the iOS system
              level to “Share With App Developers,” Apple may provide us anonymized crash diagnostics to help improve
              stability. You can control this in iOS Settings → Privacy & Security → Analytics & Improvements.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Updates and Changes</h2>
            <p>
              We may update Fokis and these Terms from time to time to improve functionality, add features, 
              or address legal requirements. We will notify you of significant changes by:
            </p>
            <ul>
              <li>Posting updated Terms in the App</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending notifications through the App (when applicable)</li>
            </ul>
            <p>
              Continued use of the App after updates constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Intellectual Property</h2>
            <p>
              Fokis and all its content, including but not limited to text, graphics, images, logos, 
              software, and design elements, are owned by us and protected by intellectual property laws. 
              You may not:
            </p>
            <ul>
              <li>Copy, reproduce, or distribute the App or its content</li>
              <li>Create derivative works based on the App</li>
              <li>Remove or modify any copyright or proprietary notices</li>
              <li>Use our trademarks or branding without permission</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Limitation of Liability</h2>
            <p>
              Fokis is provided "as is" without warranties of any kind, either express or implied. 
              We are not liable for any damages arising from your use of the App, including but not limited to:
            </p>
            <ul>
              <li>Lost productivity or time</li>
              <li>Data loss or corruption</li>
              <li>Device issues or malfunctions</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
            <p>
              Our total liability to you for any claims shall not exceed the amount you paid for the App, if any.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to Fokis at any time, with or without cause, 
              with or without notice. You may also terminate your use of the App at any time by deleting 
              the App from your device.
            </p>
            <p>
              Upon termination, your right to use the App will cease immediately, and you should delete 
              the App from your device.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
              where Fokis is operated, without regard to conflict of law principles.
            </p>
          </section>

          <section className="privacy-section">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service or need assistance, 
                please contact us at:
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

export default TermsPage