// src/components/Sidebar.tsx
import { FolderInput, FolderOpen, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserSideBar: React.FC = () => {

  return (
    <div className="bg-gray-300 text-black h-screen w-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <ul className=' py-4'>

          <Link to="/user" className="py-2 px-4 cursor-pointer hover:bg-gray-400 flex"> <LayoutDashboard /> &nbsp; Dashboard</Link>
          <Link to="/user/new-ticket" className="py-2 px-4 cursor-pointer hover:bg-gray-400 flex"> <FolderInput /> &nbsp; New Ticket</Link>
          <Link to="/user/my-ticket" className="py-2 px-4 cursor-pointer hover:bg-gray-400 flex"> <FolderOpen /> &nbsp; My Ticket</Link>

        </ul>
      </div>
    </div>
  );
};

export default UserSideBar;
