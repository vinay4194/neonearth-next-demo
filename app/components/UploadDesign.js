"use client";

import { useRef, useState } from "react";
import { useDesign } from "../context/DesignContext";

export default function UploadDesign() {
	const inputRef = useRef(null);
	const [preview, setPreview] = useState(null);
	const { setDesign } = useDesign();

	const handleChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
				setDesign(reader.result); // store globally
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="w-full max-w-md mx-auto text-center mb-10">
			<label htmlFor="design-upload" className="block text-white bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg cursor-pointer font-medium">
				Upload Your Design
			</label>
			<input ref={inputRef} id="design-upload" type="file" accept="image/*" onChange={handleChange} className="hidden" />

			{preview && (
				<div className="mt-4">
					<p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
					<img src={preview} alt="Preview" className="w-full max-w-3xs mx-auto border rounded shadow" />
				</div>
			)}
		</div>
	);
}
