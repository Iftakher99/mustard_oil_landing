const companyOwner = {
  name: 'Mohammad Liton Hossain',
  title:
    'Assistant Professor & Head of ECE Department at Institute of Science and Technology',
  photoUrl:
    'https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/80698589_2889446001101225_7314349663232983040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH9cU3VATn3qcAB929dhVZ9v2rNut25Mfy_as263bkx_MrZ_NRpdXB4VFqdU7fPIvT77Crwk8nYXl0uL9sNFWS4&_nc_ohc=Spl2v-i0VjUAX-6ovk-&_nc_ht=scontent.fdac138-2.fna&oh=00_AfD5sfuqLzSheKRkjydxQUvKoWnGRpoHZDEM2Eoow5yryA&oe=6513E5A7',
  bio: 'Mohammad Liton Hossain  is the visionary founder and CEO of our company. With a passion for mustard oil and culinary arts, he has led our company to new heights in quality and innovation.',
};
const Profile = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center mb-7">Owner Profile</h1>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-3xl bg-white rounded-lg p-6 shadow-md flex flex-col md:flex-row md:items-center">
          <div className="md:w-300 md:h-300 md:flex-shrink-0">
            <img
              className="object-cover max-h-96 max-w-96 mx-auto md:mx-0"
              src={companyOwner.photoUrl}
              alt={companyOwner.name}
            />
          </div>
          <div className="md:ml-6 mt-4 md:mt-0 ">
            <h2 className="text-xl font-semibold mb-2">{companyOwner.name}</h2>
            <p className=" font-semibold text-gray-600">{companyOwner.title}</p>
            <p className="text-gray-700 mt-2 md:mt-4">{companyOwner.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
