export default function Home() {
  return (
    <>
    <div className="checklist w-[588px] h-[410px] bg-white">
      <div className="heading px-4 shadow-inner border-b border-gray-200">
       <h2 className="text-black font-roboto text-base font-medium leading-6 py-6">
        Add Checklist
       </h2>
      </div>
      <div className="list-div px-6">
        <div className="first py-5 flex gap-4 border-b border-gray-200  ">
          <input type="checkbox"  />
          <p>Use Case Document is Stitched in netlify site in Use Case Matrix</p>
        </div>
        <div className="first py-5 flex gap-4 border-b border-gray-200  ">
          <input type="checkbox" />
          <p>Screens Design is Stitched in netlify site in Use Case matrix</p>
        </div>
        <div className="first py-5 flex gap-4 border-b border-gray-200  ">
          <input type="checkbox" />
          <p>Funtional Design Review meeting is done with Technical Team</p>
        </div>
        <div className="svg py-5 border-b border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <g clip-path="url(#clip0_181629_11409)">
    <path d="M17.6337 11.6085H13.3926V7.36738C13.3926 7.24461 13.2922 7.14417 13.1694 7.14417H11.8301C11.7074 7.14417 11.6069 7.24461 11.6069 7.36738V11.6085H7.36585C7.24309 11.6085 7.14264 11.7089 7.14264 11.8317V13.171C7.14264 13.2937 7.24309 13.3942 7.36585 13.3942H11.6069V17.6352C11.6069 17.758 11.7074 17.8585 11.8301 17.8585H13.1694C13.2922 17.8585 13.3926 17.758 13.3926 17.6352V13.3942H17.6337C17.7565 13.3942 17.8569 13.2937 17.8569 13.171V11.8317C17.8569 11.7089 17.7565 11.6085 17.6337 11.6085Z" fill="#F0F0F0"/>
    <path d="M12.5 0C5.5971 0 0 5.5971 0 12.5C0 19.4029 5.5971 25 12.5 25C19.4029 25 25 19.4029 25 12.5C25 5.5971 19.4029 0 12.5 0ZM12.5 22.8795C6.76897 22.8795 2.12054 18.231 2.12054 12.5C2.12054 6.76897 6.76897 2.12054 12.5 2.12054C18.231 2.12054 22.8795 6.76897 22.8795 12.5C22.8795 18.231 18.231 22.8795 12.5 22.8795Z" fill="#F0F0F0"/>
  </g>
  <defs>
    <clipPath id="clip0_181629_11409">
      <rect width="25" height="25" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
      </div>
      <div className="btn relative">
        <a href="#">
        <button className="rounded rounded-sm flex py-1 px-4 mt-6 justify-center items-center   bg-blue-500 text-white bg-primary-6 absolute right-10  ">Submit</button></a>
      </div>

    </div>

    <div className="screen2 flex flex-col items-start w-[612px] h-[231px] bg-white mt-20">
    <div className=" w-full border-b-2 border-gray-200">
    <h4 className="pl-3 pb-2 text-blue-500 font-roboto text-base font-normal leading-6 ">
      Stage 4
    </h4>
    </div>
    <div className="w-full border-b-2 border-gray-200">
      <h5 className="text-pink-300 font-roboto text-base font-normal leading-6 pl-3 pb-1">
        Stage Name
      </h5>
    </div>
    <div className="w-full border-b-2 border-gray-200">
      <textarea placeholder="+Add Sub Stage name " className=" px-10 py-2 border-none" cols="70" rows="1"></textarea>
    </div>
    <div className="">
    <textarea placeholder="+Add Check Lists " className=" px-16 pt-2" cols="63" rows="1"></textarea>
    <div className="btn relative">
        <a href="#">
        <button className="rounded rounded-sm flex  py-1  px-4 mt-6 justify-center items-center   bg-blue-500 text-white bg-primary-6 absolute right-10 top-3 ">Add</button></a>
      </div>
    </div>
    </div>
    <div className="div h-10"></div>
    </>
  )
}
