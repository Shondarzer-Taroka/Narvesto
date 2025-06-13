import React from "react";

const GlassCalendar = () => {
  return (
    <div className="relative flex items-center justify-center  p-6">
      {/* Glass Effect Calendar */}
      <div className="backdrop-blur-md bg-white/10 shadow-lg border border-white/20 rounded-2xl p-6 w-96">
        <div className="grid grid-cols-7 gap-3 text-center text-white text-sm font-medium">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="opacity-80">{day}</div>
          ))}
          {[22, 23, 24, 25, 26, 27, 28].map((date, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${date === 25 ? 'bg-yellow-400 text-black font-bold' : 'opacity-90'}`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Meeting Card */}
      <div className="absolute -bottom-8 left-10 backdrop-blur-md bg-white/10 shadow-md border border-white/20 rounded-lg p-4 w-60">
        <h4 className="text-white font-semibold text-sm flex items-center">
          Daily Meeting <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></span>
        </h4>
        <p className="text-gray-200 text-xs mt-1">12:00pm - 01:00pm</p>
      </div>
    </div>
  );
};

export default GlassCalendar;
