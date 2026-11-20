import { company } from "@/content/site";

const linkCls = "text-on-night no-underline hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="bg-night text-[15px] text-on-night-soft">
      <div className="wrap grid gap-8 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <h3 className="mb-3 text-sm font-medium text-white">{company.name}</h3>
          <p>
            <a className={linkCls} href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p className="mt-2">{company.registration}</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium text-white">Services</h3>
          <ul className="flex flex-col gap-2">
            <li><a className={linkCls} href="#coaching">Executive coaching</a></li>
            <li><a className={linkCls} href="#services">Inclusion consulting</a></li>
            <li><a className={linkCls} href="#services">Tech consulting</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-medium text-white">Company</h3>
          <ul className="flex flex-col gap-2">
            <li><a className={linkCls} href="#about">About Laura</a></li>
            {/* LinkedIn, privacy and accessibility pages are added with the inner pages */}
            <li><a className={linkCls} href="#">LinkedIn</a></li>
            <li><a className={linkCls} href="#">Privacy</a></li>
            <li><a className={linkCls} href="#">Accessibility statement</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap border-t border-line-night py-5 text-sm">© 2026 {company.name}</div>
    </footer>
  );
}
