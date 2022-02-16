import AuthFooter from '../auth/footer'

export default function AuthLayout({ children, heading }) {
  return (
    <div className="h-full w-full min-h-screen bg-primary">
      <div className="shadow-navbar bg-primary h-navbar box-navbar px-6 py-5 w-full flex justify-center sm:justify-start">
        <img src="/images/logo.svg" className="w-16" />
      </div>
      <div className="w-full min-h-fullWithNavbar flex flex-col sm:items-center justify-center">
        <div className="w-screen sm:w-authBox">
          {heading && (
            <h1 className="text-2xl text-white font-semibold text-center mb-6 mt-3">
              {heading}
            </h1>
          )}
          <div className="bg-white sm:rounded-xl py-12 px-5 sm:px-9">
            {children}
          </div>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
