import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-base">clinical_notes</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">MediCare AI</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pioneering the future of healthcare through artificial intelligence and intelligent clinic management systems.
            </p>
            <div className="mt-6 flex gap-4">
              <a className="text-slate-400 hover:text-primary transition" href="#" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition" href="mailto:support@medicare.ai">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a className="text-slate-400 hover:text-primary transition" href="tel:+15550001111">
                <span className="material-symbols-outlined">call</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link className="hover:text-primary transition" href="#">About Us</Link></li>
              <li><Link className="hover:text-primary transition" href="#">How it Works</Link></li>
              <li><Link className="hover:text-primary transition" href="#">AI Technology</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Clinic Portal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link className="hover:text-primary transition" href="#">Help Center</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Terms of Service</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Newsletter</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Get the latest updates in health tech.</p>
            <div className="flex gap-2">
              <input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="Your email" type="email" />
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary/90">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">© 2024 MediCare AI. All rights reserved. Designed for excellence in healthcare.</p>
        </div>
      </div>
    </footer>
  );
}
