import Image from "next/image"

export default function Footer() {
  return (
    <footer className="footer p-10 bg-primary text-white">
      <div>
        <Image
          src="/bonfire.png"
          width={50}
          height={50}
          className="mr-6"
          alt="bonfire"
        />
        <p>
          Some Campground
          <br />
          Chillin' out, maxin', relaxin', all cool since 1962
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  )
}
