import type { ICanvasGradient, ICanvasRenderingContext } from "core/Engines/ICanvas";
import { BaseGradient } from "./BaseGradient";
import { RegisterClass } from "core/Misc/typeStore";

/**
 * Gradient along a circle with center at given (x, y) coordinates
 * These coordinates are relative to the canvas' space, not to any control's space.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createConicGradient
 */
export class ConicGradient extends BaseGradient {
    private _startAngle: number;
    private _x: number;
    private _y: number;

    /**
     * Creates a new conic gradient
     * @param startAngle starting angle of the circle. The angle direction is clockwise.
     * @param x
     * @param y
     */
    constructor(startAngle?: number, x?: number, y?: number) {
        super();
        this._startAngle = startAngle ?? 0;
        this._x = x ?? 0;
        this._y = y ?? 0;
    }

    protected _createCanvasGradient(context: ICanvasRenderingContext): ICanvasGradient {
        return context.createConicGradient(this._startAngle, this._x, this._y);
    }

    public get startAngle() {
        return this._startAngle;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public getClassName() {
        return "ConicGradient";
    }

    public serialize(serializationObject: any) {
        super.serialize(serializationObject);
        serializationObject.startAngle = this._startAngle;
        serializationObject.x = this._x;
        serializationObject.y = this._y;
    }

    public parse(serializationObject: any): void {
        super.parse(serializationObject);
        this._startAngle = serializationObject.startAngle;
        this._x = serializationObject.x;
        this._y = serializationObject.y;
    }
}
RegisterClass("BABYLON.GUI.ConicGradient", ConicGradient);
