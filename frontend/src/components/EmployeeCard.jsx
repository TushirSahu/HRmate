import React from "react";

const EmployeeCard = () => {
    return (
        <div className="flex flex-col items-center sm:items-start mb-4">
            <div className="dark:bg-gray-800 max-w-fit flex flex-col justify-start sm:space-x-24 items-start sm:flex-row gap-2 sm:items-center px-5 py-4 rounded-lg shadow-lg">
                <div className="flex flex-row space-x-8 sm:flex-col sm:space-x-0">
                    <div className="text-md leading-5 font-medium text-gray-900 dark:text-white">
                        John Doe
                    </div>
                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                </div>
                <div className="flex flex-row space-x-8 sm:flex-col sm:space-x-0">
                    <div className="text-md leading-5 text-gray-900 dark:text-white">Software Engineer</div>
                    <div className="text-sm leading-5 text-gray-500">Web dev</div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <span className="sm:px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="sm:px-6 sm:py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 dark:text-white">
                        Owner
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="sm:px-6 sm:py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Marked as Interviewee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmployeeCard;