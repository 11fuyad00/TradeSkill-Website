import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/Firebase.config';
import Navber from '../component/Navber';
import Footer from './Footer';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('Current User:', user);
  }, [user]);

  const handleUpdate = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (!auth.currentUser) {
      toast.error('No user logged in!');
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success('Profile updated successfully! ✅');

        auth.currentUser
          .reload()
          .then(() => {
            console.log('Updated User:', auth.currentUser);
            setUser({ ...auth.currentUser });
          })
          .catch(error => console.error('Reload failed:', error));
      })
      .catch(error => {
        console.error('Update failed:', error);
        toast.error('Update failed! ❌');
      });
  };

  return (
    <>
      <Navber />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 w-full max-w-md text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">My Profile</h2>

          {user ? (
            <div className="mb-6">
              <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
              />
              <h3 className="text-xl font-semibold text-white">
                {user.displayName || 'No Name'}
              </h3>
              <p className="text-white/80">{user.email}</p>
            </div>
          ) : (
            <p className="text-white/80">No user found. Please log in.</p>
          )}

          {user && (
            <form onSubmit={handleUpdate} className="space-y-4 text-left">
              <div>
                <label className="block text-white text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ''}
                  className="w-full px-4 py-2 rounded-lg border border-white/30 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-white text-sm mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={user?.photoURL || ''}
                  className="w-full px-4 py-2 rounded-lg border border-white/30 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-xl shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300"
              >
                Update Profile
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
