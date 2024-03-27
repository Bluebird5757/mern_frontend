import { useNavigate, useParams } from 'react-router-dom'; 
export default function Growerdash()
{var navigate1=useNavigate();
  function doavailproduct()
  {
    navigate1("/gotoavailproduct");
  }
  function doitemsmanager()
  {
    navigate1("/gotoitemsmanager");
  }
  function dogrowerprofile()
  {
    navigate1("/gotogrowerprofile");
  }
    return (
        <>
            <div class="grid grid-cols-2 gap-4 container">
  
  <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mb-4 mt-5">
    {/* <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/350x150" alt="Card image"> */}
    <div class="px-6 py-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Avail Products</h2>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis felis.</p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <input type="button" value="More About It" onClick={doavailproduct}/>
    </div>
  </div>
  
  <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mb-4 mt-5">
    {/* <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/350x150" alt="Card image"> */}
    <div class="px-6 py-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Items Manager</h2>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis felis.</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <input type="button" value="More About It" onClick={doitemsmanager}/>
    </div>
  </div>

  
  <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
    {/* <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/350x150" alt="Card image"> */}
    <div class="px-6 py-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis felis.</p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <input type="button" value="More About It" onClick={dogrowerprofile}/>
    </div>
  </div>

  <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
    {/* <img class="w-full h-56 object-cover object-center" src="https://via.placeholder.com/350x150" alt="Card image"> */}
    <div class="px-6 py-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Settings</h2>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis felis.</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag7</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag8</span>
    </div>
  </div>
</div>


        </>
    )
}