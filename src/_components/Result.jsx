/* eslint-disable react/prop-types */

const Result = ({ model, fuelType, result }) => {
  return (
    <div className="mt-10 space-y-10">
      <h1 className="font-bold text-[25px] text-[#231f20]">
        Suitable batteries for {model} {`(${fuelType})`}
      </h1>

      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {/* Battery Name */}
          <div className="bg-green-50">
            <div className="grid grid-cols-2 border-b">
              <div className="px-4 py-3">Battery Name</div>
              <div className="px-4 py-3">{result["battery-name"]}</div>
            </div>
          </div>
          {/* Price Section */}
          <div className="bg-green-50">
            <div className="grid grid-cols-2 border-b">
              <div className="px-4 py-3">Base Price (Inclusive of GST)</div>
              <div className="px-4 py-3">
                ₹{result["Base Price (Inclusive of GST)"]}
              </div>
            </div>
            {result["Discount Price"] && (
              <>
                <div className="grid grid-cols-2 border-b">
                  <div className="px-4 py-3">
                    Special Discount (Till 5th Jan)
                  </div>
                  <div className="px-4 py-3 text-green-600">
                    ₹{result["Discount Price"]}
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b font-medium">
                  <div className="px-4 py-3">
                    Total Price (Inclusive of GST)
                  </div>
                  <div className="px-4 py-3">
                    ₹
                    {result["Base Price (Inclusive of GST)"] -
                      result["Discount Price"]}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Rebate Section */}
          <div className="bg-green-50 px-4 py-3">
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2 text-green-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-1 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 4a1 1 0 100 2h4a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Rebate on Return of old battery</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Additionally, receive upto ₹3,770 per unit on return of similar
              old battery
            </div>
          </div>

          {/* Specifications Section */}
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Brand</div>
              <div className="px-4 py-3">{result.brand}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Series</div>
              <div className="px-4 py-3">{result.series}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Item Code</div>
              <div className="px-4 py-3">{result.item_code}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Model</div>
              <div className="px-4 py-3">{result.model}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">
                Product Dimensions (LxBxH) (mm)
              </div>
              <div className="px-4 py-3">{result.dimentions}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Voltage (V)</div>
              <div className="px-4 py-3">{result.voltage}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Ref. Ampere Hour (AH)</div>
              <div className="px-4 py-3">{result.amphere_hour}</div>
            </div>
            
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">
                Total Warranty (Months)
              </div>
              <div className="px-4 py-3">{result.warranty}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Free Warranty (Months)</div>
              <div className="px-4 py-3">{result.free_warranty}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">
                Pro-rata Warranty (Months)
              </div>
              <div className="px-4 py-3">{result.pro_warranty}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 bg-gray-50">Country of Origin</div>
              <div className="px-4 py-3">{result.country}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
