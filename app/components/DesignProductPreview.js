"use client";

import { Stage, Layer, Image as KonvaImage, Group } from "react-konva";
import useImage from "use-image";
import { clipShapes } from "../utils/clipShapes";
import { useDesign } from "../context/DesignContext";

export default function DesignProductPreview({ productImg, maskImg, width = 220, height = 220, overlayBox }) {
	const { design } = useDesign();
	const [product] = useImage(productImg);
	const [overlay] = useImage(design);
	const [mask] = useImage(maskImg);

	return (
		<div className="w-full flex justify-center overflow-hidden mt-8">
			<Stage width={width} height={height} className="rounded block">
				<Layer>
					{/* Product base image with transparent background on top */}
					{product && !mask && <KonvaImage image={product} width={width} height={height} />}

					{/* maintian aspect ratio*/}
					{overlay &&
						(() => {
							const imgWidth = overlay.width;
							const imgHeight = overlay.height;
							const boxWidth = overlayBox?.width ?? width;
							const boxHeight = overlayBox?.height ?? height;

							const preserveAspect = overlayBox?.preserveAspect !== false;

							let drawWidth = boxWidth;
							let drawHeight = boxHeight;

							if (preserveAspect) {
								const imgAspect = imgWidth / imgHeight;
								const boxAspect = boxWidth / boxHeight;

								if (imgAspect > boxAspect) {
									drawWidth = boxWidth;
									drawHeight = boxWidth / imgAspect;
								} else {
									drawHeight = boxHeight;
									drawWidth = boxHeight * imgAspect;
								}
							}

							const baseX = overlayBox?.x ?? 0;
							const baseY = overlayBox?.y ?? 0;
							const drawX = baseX + (preserveAspect ? Math.max(0, (boxWidth - drawWidth) / 2) : 0);
							const drawY = baseY + (preserveAspect ? Math.max(0, (boxHeight - drawHeight) / 2) : 0);

							return (
								<>
									<KonvaImage
										image={overlay}
										x={drawX}
										y={drawY}
										width={drawWidth}
										height={drawHeight}
										opacity={1}
										crop={{ x: 0, y: 0, width: imgWidth, height: imgHeight }}
									/>
									{product && mask && <KonvaImage image={mask} width={width} height={height} />}
								</>
							);
						})()}
				</Layer>
			</Stage>
		</div>
	);
}
