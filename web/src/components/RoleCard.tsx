export default function RoleCard({role,description,imageUrl}:{ role:string, description:string, imageUrl:string }) {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
            <img src={imageUrl} alt={role} className="w-16 h-16 mb-4 rounded-full" />
            <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
            <p className="text-gray-600">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View More
            </button>
        </div>
    );
}