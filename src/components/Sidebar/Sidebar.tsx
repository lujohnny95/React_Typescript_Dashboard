import styles from "./Sidebar.module.css"
import { Link, useLocation } from "react-router-dom"

const sidebarNavLinks = ["dashboard", "expenses", "wallets", "summary", "accounts", "settings"];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}> 
        <div className={styles.profileDetails}>
          {/* Image and details */}
          <div className={styles.profileImageDiv}>
            <img src="#" alt="profile-image" />
            <p className={styles.notifications}>6</p>
          </div>
          <p className={styles.userName}>Johnny</p>
          <p className={styles.userEmail}>johnny_lu@live.com</p>
        </div>
        
        {/* Sidebar options */}
        <nav>
          <ul>
            {sidebarNavLinks.map((sidebarNavLink) => ( 
              <li key={sidebarNavLink} className={styles.sidebarNavItem}>
                <Link className={location.pathname === `/${sidebarNavLink}` ? styles.sidebarNavLinkActive : styles.sidebarNavLink} to="/dashboard">
                  {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar