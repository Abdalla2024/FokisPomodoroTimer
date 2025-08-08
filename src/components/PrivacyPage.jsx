import { useEffect } from 'react'

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: August 2025</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to Fokis ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, store,
              and protect your information when you use our Fokis productivity
              application ("App") on iOS devices.
            </p>
            <p>
              By using our App, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              We do not collect, transmit, or store your personal data on our
              servers. All app data — including your focus sessions, tasks,
              settings, and bird collection progress — is stored locally on your
              device and remains under your control.
            </p>

            <h3>Crash diagnostics (optional)</h3>
            <p>
              If you have opted in at the iOS system level to share crash
              diagnostics with developers, Apple may provide us anonymized crash
              logs to help improve stability. These logs do not contain
              information that directly identifies you and are controlled by
              your device settings (Settings → Privacy & Security → Analytics &
              Improvements).
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>
              Fokis processes your data entirely on-device to power core
              features such as timers, tasks, stats, and the bird collection.
              We do not use third‑party analytics or advertising SDKs, and we do
              not send your data to external servers.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Storage and Security</h2>
            <p>
              Your data is stored locally on your device. We do not operate a
              backend for Fokis, and we do not offer developer‑operated cloud
              syncing. Your app data may be included in your iCloud device
              backups, which are encrypted and managed by Apple. Deleting the
              app from your device will remove the data stored by Fokis locally;
              backups can be managed from iOS Settings.
            </p>
            <ul>
              <li>Local data storage protected by iOS device security</li>
              <li>No developer‑operated cloud sync or transmission to our servers</li>
              <li>iCloud device backups are optional and controlled by Apple and your iOS settings</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>In‑App Purchases</h2>
            <p>
              If Fokis offers in‑app purchases, payments are processed by Apple
              via StoreKit and the App Store. We do not receive or store your
              full payment information. Apple may provide us with anonymized
              sales and transaction reports to help us understand purchases and
              refunds at an aggregate level.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Sharing and Third Parties</h2>
            <p>
              We do not sell or share your personal data. Fokis does not
              integrate third‑party advertising, analytics, or tracking SDKs.
              Aside from optional Apple-provided crash diagnostics (controlled
              by your iOS settings), no data leaves your device.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights and Choices</h2>
            <p>You are in control of your data on your device:</p>
            <ul>
              <li>
                <strong>Access:</strong> View and manage your data directly in
                the app.
              </li>
              <li>
                <strong>Deletion:</strong> You can delete the app to remove all
                locally stored data. If an in‑app reset option is available, you
                can use it to clear data without uninstalling.
              </li>
              <li>
                <strong>Diagnostics Opt‑In:</strong> You can disable iOS
                “Share With App Developers” to stop sharing anonymized crash
                diagnostics.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Fokis is not intended for use by children under the age of 13.
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