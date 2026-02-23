import {
  NavLink as RouterNavLink,
  NavLinkProps,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { forwardRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, onClick, ...props }, ref) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);

      const targetPath = typeof to === "string" ? to : to.pathname;

      // 👉 If clicking the SAME route
      if (targetPath === location.pathname) {
        e.preventDefault();

        // force scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // force rerender of page (react-router way)
        navigate(targetPath, { replace: true });
      }
    };

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        onClick={handleClick}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
