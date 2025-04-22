export const clipShapes = {
	curvedCushion: (ctx) => {
		const w = 180;
		const h = 180;
		const curve = -20; // inward curve offset

		ctx.beginPath();

		// Top side
		ctx.moveTo(curve, 0);
		ctx.quadraticCurveTo(w / 2, -curve, w - curve, 0);

		// Right side
		ctx.quadraticCurveTo(w + curve, h / 2, w - curve, h);

		// Bottom side
		ctx.quadraticCurveTo(w / 2, h + curve, curve, h);

		// Left side
		ctx.quadraticCurveTo(-curve, h / 2, curve, 0);

		ctx.closePath();
	},
};
