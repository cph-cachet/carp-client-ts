type Nullable<T> = T | null | undefined
export declare namespace dk.cachet.carp.common.application {
    class EmailAddress {
        constructor(address: string);
        get address(): string;
        toString(): string;
        copy(address?: string): dk.cachet.carp.common.application.EmailAddress;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application {
    function toEpochMicroseconds(_this_: kotlinx.datetime.Instant): kotlin.Long;
}
export declare namespace dk.cachet.carp.common.application {
    class MACAddress {
        constructor(address: string);
        get address(): string;
        toString(): string;
        copy(address?: string): dk.cachet.carp.common.application.MACAddress;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            parse(address: string): dk.cachet.carp.common.application.MACAddress;
        };
    }
}
export declare namespace dk.cachet.carp.common.application {
    class NamespacedId {
        constructor(namespace: string, name: string);
        get namespace(): string;
        get name(): string;
        toString(): string;
        copy(namespace?: string, name?: string): dk.cachet.carp.common.application.NamespacedId;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            fromString(fullyQualifiedName: string): dk.cachet.carp.common.application.NamespacedId;
        };
    }
}
export declare namespace dk.cachet.carp.common.application {
    class RecurrenceRule {
        constructor(frequency: dk.cachet.carp.common.application.RecurrenceRule.Frequency, interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End);
        get frequency(): dk.cachet.carp.common.application.RecurrenceRule.Frequency;
        get interval(): number;
        get end(): dk.cachet.carp.common.application.RecurrenceRule.End;
        toString(): string;
        copy(frequency?: dk.cachet.carp.common.application.RecurrenceRule.Frequency, interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            secondly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            minutely(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            hourly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            daily(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            weekly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            monthly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            yearly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
            fromString(rrule: string): dk.cachet.carp.common.application.RecurrenceRule;
        };
    }
    namespace RecurrenceRule {
        abstract class Frequency {
            private constructor();
            static get SECONDLY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "SECONDLY";
                get ordinal(): 0;
            };
            static get MINUTELY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "MINUTELY";
                get ordinal(): 1;
            };
            static get HOURLY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "HOURLY";
                get ordinal(): 2;
            };
            static get DAILY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "DAILY";
                get ordinal(): 3;
            };
            static get WEEKLY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "WEEKLY";
                get ordinal(): 4;
            };
            static get MONTHLY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "MONTHLY";
                get ordinal(): 5;
            };
            static get YEARLY(): dk.cachet.carp.common.application.RecurrenceRule.Frequency & {
                get name(): "YEARLY";
                get ordinal(): 6;
            };
            static values(): Array<dk.cachet.carp.common.application.RecurrenceRule.Frequency>;
            static valueOf(value: string): dk.cachet.carp.common.application.RecurrenceRule.Frequency;
            get name(): "SECONDLY" | "MINUTELY" | "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
            get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6;
        }
        abstract class End {
            protected constructor();
            static get Never(): {
            } & dk.cachet.carp.common.application.RecurrenceRule.End & any/* kotlinx.serialization.internal.SerializerFactory */;
            static get Companion(): {
            } & any/* kotlinx.serialization.internal.SerializerFactory */;
        }
        namespace End {
            class Until extends dk.cachet.carp.common.application.RecurrenceRule.End {
                constructor(elapsedTime: kotlin.time.Duration);
                get elapsedTime(): kotlin.time.Duration;
                toString(): string;
                copy(elapsedTime?: kotlin.time.Duration): dk.cachet.carp.common.application.RecurrenceRule.End.Until;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
                static get Companion(): {
                };
            }
            class Count extends dk.cachet.carp.common.application.RecurrenceRule.End {
                constructor(count: number);
                get count(): number;
                toString(): string;
                copy(count?: number): dk.cachet.carp.common.application.RecurrenceRule.End.Count;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
                static get Companion(): {
                };
            }
        }
    }
}
export declare namespace dk.cachet.carp.common.application {
    class TimeOfDay {
        constructor(hour: number, minutes?: number, seconds?: number);
        get hour(): number;
        get minutes(): number;
        get seconds(): number;
        toString(): string;
        copy(hour?: number, minutes?: number, seconds?: number): dk.cachet.carp.common.application.TimeOfDay;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            fromString(time: string): dk.cachet.carp.common.application.TimeOfDay;
        };
    }
}
export declare namespace dk.cachet.carp.common.application {
    abstract class Trilean {
        private constructor();
        static get TRUE(): dk.cachet.carp.common.application.Trilean & {
            get name(): "TRUE";
            get ordinal(): 0;
        };
        static get FALSE(): dk.cachet.carp.common.application.Trilean & {
            get name(): "FALSE";
            get ordinal(): 1;
        };
        static get UNKNOWN(): dk.cachet.carp.common.application.Trilean & {
            get name(): "UNKNOWN";
            get ordinal(): 2;
        };
        static values(): Array<dk.cachet.carp.common.application.Trilean>;
        static valueOf(value: string): dk.cachet.carp.common.application.Trilean;
        get name(): "TRUE" | "FALSE" | "UNKNOWN";
        get ordinal(): 0 | 1 | 2;
    }
    function toTrilean(_this_: boolean): dk.cachet.carp.common.application.Trilean;
}
export declare namespace dk.cachet.carp.common.application {
    class UUID {
        constructor(stringRepresentation: string);
        get stringRepresentation(): string;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
        static get Companion(): {
            parse(uuid: string): dk.cachet.carp.common.application.UUID;
            randomUUID(): dk.cachet.carp.common.application.UUID;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class Acceleration implements dk.cachet.carp.common.application.data.SensorData {
        constructor(x: number, y: number, z: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get x(): number;
        get y(): number;
        get z(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(x?: number, y?: number, z?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.Acceleration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class AngularVelocity implements dk.cachet.carp.common.application.data.SensorData {
        constructor(x: number, y: number, z: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get x(): number;
        get y(): number;
        get z(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(x?: number, y?: number, z?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.AngularVelocity;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    const CarpDataTypes: {
        get CARP_NAMESPACE(): string;
        get GEOLOCATION(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get STEP_COUNT(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get ECG(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get PPG(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get HEART_RATE(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get INTERBEAT_INTERVAL(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get SENSOR_SKIN_CONTACT(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get NON_GRAVITATIONAL_ACCELERATION(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get EDA(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get ACCELERATION(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get ANGULAR_VELOCITY(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get SIGNAL_STRENGTH(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get TRIGGERED_TASK(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get COMPLETED_TASK(): dk.cachet.carp.common.application.data.DataTypeMetaData;
    } & dk.cachet.carp.common.application.data.DataTypeMetaDataMap;
}
export declare namespace dk.cachet.carp.common.application.data {
    class CompletedTask implements dk.cachet.carp.common.application.data.Data {
        constructor(taskName: string, taskData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get taskName(): string;
        get taskData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(taskName?: string, taskData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.CompletedTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.Data["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    interface Data {
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.data.Data": unique symbol;
        };
    }
    interface SensorData extends dk.cachet.carp.common.application.data.Data {
        readonly sensorSpecificData: Nullable<dk.cachet.carp.common.application.data.Data>;
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.data.SensorData": unique symbol;
        } & dk.cachet.carp.common.application.data.Data["__doNotUseOrImplementIt"];
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class DataTypeMetaData {
        constructor(type: dk.cachet.carp.common.application.NamespacedId, displayName: string, timeType: dk.cachet.carp.common.application.data.DataTimeType);
        get type(): dk.cachet.carp.common.application.NamespacedId;
        get displayName(): string;
        get timeType(): dk.cachet.carp.common.application.data.DataTimeType;
        copy(type?: dk.cachet.carp.common.application.NamespacedId, displayName?: string, timeType?: dk.cachet.carp.common.application.data.DataTimeType): dk.cachet.carp.common.application.data.DataTypeMetaData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    abstract class DataTimeType {
        private constructor();
        static get POINT(): dk.cachet.carp.common.application.data.DataTimeType & {
            get name(): "POINT";
            get ordinal(): 0;
        };
        static get TIME_SPAN(): dk.cachet.carp.common.application.data.DataTimeType & {
            get name(): "TIME_SPAN";
            get ordinal(): 1;
        };
        static values(): Array<dk.cachet.carp.common.application.data.DataTimeType>;
        static valueOf(value: string): dk.cachet.carp.common.application.data.DataTimeType;
        get name(): "POINT" | "TIME_SPAN";
        get ordinal(): 0 | 1;
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class DataTypeMetaDataMap /* extends dk.cachet.carp.common.application.EnumObjectMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData> */ {
        constructor();
        add(fullyQualifiedName: string, displayName: string, timeType: dk.cachet.carp.common.application.data.DataTimeType): dk.cachet.carp.common.application.data.DataTypeMetaData;
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class ECG implements dk.cachet.carp.common.application.data.SensorData {
        constructor(milliVolt: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get milliVolt(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(milliVolt?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.ECG;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class EDA implements dk.cachet.carp.common.application.data.SensorData {
        constructor(microSiemens: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get microSiemens(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(microSiemens?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.EDA;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class Geolocation implements dk.cachet.carp.common.application.data.SensorData {
        constructor(latitude: number, longitude: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get latitude(): number;
        get longitude(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(latitude?: number, longitude?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.Geolocation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
            get MIN_LATITUDE(): number;
            get MAX_LATITUDE(): number;
            get MIN_LONGITUDE(): number;
            get MAX_LONGITUDE(): number;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class HeartRate implements dk.cachet.carp.common.application.data.SensorData {
        constructor(bpm: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get bpm(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(bpm?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.HeartRate;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class InterbeatInterval implements dk.cachet.carp.common.application.data.SensorData {
        constructor(sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.InterbeatInterval;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class NonGravitationalAcceleration implements dk.cachet.carp.common.application.data.SensorData {
        constructor(x: number, y: number, z: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get x(): number;
        get y(): number;
        get z(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(x?: number, y?: number, z?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.NonGravitationalAcceleration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class PPG implements dk.cachet.carp.common.application.data.SensorData {
        constructor(lightSources: kotlin.collections.Map<string, number>, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get lightSources(): kotlin.collections.Map<string, number>;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(lightSources?: kotlin.collections.Map<string, number>, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.PPG;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class SensorSkinContact implements dk.cachet.carp.common.application.data.SensorData {
        constructor(contact: boolean, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get contact(): boolean;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(contact?: boolean, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.SensorSkinContact;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class SignalStrength implements dk.cachet.carp.common.application.data.SensorData {
        constructor(rssi: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get rssi(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(rssi?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.SignalStrength;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class StepCount implements dk.cachet.carp.common.application.data.SensorData {
        constructor(steps: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get steps(): number;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(steps?: number, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.StepCount;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class TriggeredTask implements dk.cachet.carp.common.application.data.Data {
        constructor(triggerId: number, taskName: string, destinationDeviceRoleName: string, control: dk.cachet.carp.common.application.triggers.TaskControl.Control, triggerData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get triggerId(): number;
        get taskName(): string;
        get destinationDeviceRoleName(): string;
        get control(): dk.cachet.carp.common.application.triggers.TaskControl.Control;
        get triggerData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(triggerId?: number, taskName?: string, destinationDeviceRoleName?: string, control?: dk.cachet.carp.common.application.triggers.TaskControl.Control, triggerData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.TriggeredTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.Data["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data.input {
    const CarpInputDataTypes: {
        get CARP_NAMESPACE(): string;
        get SEX(): dk.cachet.carp.common.application.NamespacedId;
    } & dk.cachet.carp.common.application.data.input.InputDataTypeList;
}
export declare namespace dk.cachet.carp.common.application.data.input {
    class CustomInput implements dk.cachet.carp.common.application.data.Data {
        constructor(input: any);
        get input(): any;
        copy(input?: any): dk.cachet.carp.common.application.data.input.CustomInput;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.Data["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data.input {
    class InputDataTypeList /* implements kotlin.collections.List<dk.cachet.carp.common.application.NamespacedId> */ {
        private constructor();
        get list(): any/* kotlin.collections.MutableList<dk.cachet.carp.common.application.NamespacedId> */;
        static create(): dk.cachet.carp.common.application.data.input.InputDataTypeList;
        get inputElements(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.input.elements.InputElement<any>>;
        get dataClasses(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, kotlin.reflect.KClass<any>>;
        get inputToDataConverters(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, (p0: any) => dk.cachet.carp.common.application.data.Data>;
        get dataToInputConverters(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, (p0: dk.cachet.carp.common.application.data.Data) => any>;
        protected add<TInput extends any, TData extends dk.cachet.carp.common.application.data.Data>(inputDataType: dk.cachet.carp.common.application.NamespacedId, inputElement: dk.cachet.carp.common.application.data.input.elements.InputElement<TInput>, dataClass: any/* kotlin.reflect.KClass<TData> */, inputToData: (p0: TInput) => TData, dataToInput: (p0: TData) => TInput): dk.cachet.carp.common.application.NamespacedId;
    }
}
export declare namespace dk.cachet.carp.common.application.data.input {
    abstract class Sex implements dk.cachet.carp.common.application.data.Data {
        private constructor();
        static get Male(): dk.cachet.carp.common.application.data.input.Sex & {
            get name(): "Male";
            get ordinal(): 0;
        };
        static get Female(): dk.cachet.carp.common.application.data.input.Sex & {
            get name(): "Female";
            get ordinal(): 1;
        };
        static get Intersex(): dk.cachet.carp.common.application.data.input.Sex & {
            get name(): "Intersex";
            get ordinal(): 2;
        };
        static values(): Array<dk.cachet.carp.common.application.data.input.Sex>;
        static valueOf(value: string): dk.cachet.carp.common.application.data.input.Sex;
        get name(): "Male" | "Female" | "Intersex";
        get ordinal(): 0 | 1 | 2;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.Data["__doNotUseOrImplementIt"];
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace dk.cachet.carp.common.application.data.input.elements {
    interface InputElement<TData extends any> {
        readonly prompt: string;
        isValid(input: TData): boolean;
        getDataClass(): any/* kotlin.reflect.KClass<TData> */;
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.data.input.elements.InputElement": unique symbol;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data.input.elements {
    class SelectOne implements dk.cachet.carp.common.application.data.input.elements.InputElement<string> {
        constructor(prompt: string, options: kotlin.collections.Set<string>);
        get prompt(): string;
        get options(): kotlin.collections.Set<string>;
        isValid(input: string): boolean;
        getDataClass(): any/* kotlin.reflect.KClass<string> */;
        copy(prompt?: string, options?: kotlin.collections.Set<string>): dk.cachet.carp.common.application.data.input.elements.SelectOne;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.input.elements.InputElement<string>["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data.input.elements {
    class Text implements dk.cachet.carp.common.application.data.input.elements.InputElement<string> {
        constructor(prompt: string);
        get prompt(): string;
        isValid(input: string): boolean;
        getDataClass(): any/* kotlin.reflect.KClass<string> */;
        copy(prompt?: string): dk.cachet.carp.common.application.data.input.elements.Text;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.input.elements.InputElement<string>["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class AltBeacon extends dk.cachet.carp.common.application.devices.DeviceConfiguration<dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration, dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistrationBuilder;
        getRegistrationClass(): any/* kotlin.reflect.KClass<dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration> */;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.AltBeacon;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Sensors(): {
            get SIGNAL_STRENGTH(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
        } & dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        static get Tasks(): {
        } & dk.cachet.carp.common.application.tasks.TaskConfigurationList;
        static get Companion(): {
        };
    }
    class AltBeaconDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration {
        constructor(manufacturerId: number, organizationId: dk.cachet.carp.common.application.UUID, majorId: number, minorId: number, referenceRssi: number, deviceDisplayName?: Nullable<string>);
        get manufacturerId(): number;
        get organizationId(): dk.cachet.carp.common.application.UUID;
        get majorId(): number;
        get minorId(): number;
        get referenceRssi(): number;
        get deviceDisplayName(): Nullable<string>;
        get deviceId(): string;
        copy(manufacturerId?: number, organizationId?: dk.cachet.carp.common.application.UUID, majorId?: number, minorId?: number, referenceRssi?: number, deviceDisplayName?: Nullable<string>): dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            get REFERENCE_RSS_RANGE(): any/* kotlin.ranges.IntRange */;
        };
    }
    class AltBeaconDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration> {
        constructor();
        get manufacturerId(): number;
        set manufacturerId(value: number);
        get organizationId(): dk.cachet.carp.common.application.UUID;
        set organizationId(value: dk.cachet.carp.common.application.UUID);
        get majorId(): number;
        set majorId(value: number);
        get minorId(): number;
        set minorId(value: number);
        get referenceRssi(): number;
        set referenceRssi(value: number);
        build(): dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class BLEHeartRateDevice extends dk.cachet.carp.common.application.devices.DeviceConfiguration<dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration, dk.cachet.carp.common.application.devices.MACAddressDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.MACAddressDeviceRegistrationBuilder;
        getRegistrationClass(): any/* kotlin.reflect.KClass<dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration> */;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.BLEHeartRateDevice;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Sensors(): {
            get HEART_RATE(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
            get INTERBEAT_INTERVAL(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
            get SENSOR_SKIN_CONTACT(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
        } & dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        static get Tasks(): {
        } & dk.cachet.carp.common.application.tasks.TaskConfigurationList;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class BLESerialNumberDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration {
        constructor(serialNumber: string, deviceDisplayName?: Nullable<string>);
        get serialNumber(): string;
        get deviceDisplayName(): Nullable<string>;
        get deviceId(): string;
        copy(serialNumber?: string, deviceDisplayName?: Nullable<string>): dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class BLESerialNumberDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration> {
        constructor();
        get serialNumber(): string;
        set serialNumber(value: string);
        build(): dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class CustomProtocolDevice extends dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration, dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder;
        getRegistrationClass(): any/* kotlin.reflect.KClass<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration> */;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.DefaultDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.CustomProtocolDevice;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Sensors(): {
        } & dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        static get Tasks(): {
        } & dk.cachet.carp.common.application.tasks.TaskConfigurationList;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class DefaultDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration {
        constructor(deviceDisplayName?: Nullable<string>, deviceId?: string);
        get deviceDisplayName(): Nullable<string>;
        get deviceId(): string;
        copy(deviceDisplayName?: Nullable<string>, deviceId?: string): dk.cachet.carp.common.application.devices.DefaultDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class DefaultDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration> {
        constructor();
        get deviceId(): string;
        set deviceId(value: string);
        build(): dk.cachet.carp.common.application.devices.DefaultDeviceRegistration;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    abstract class DeviceConfiguration<TRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration, TRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<TRegistration>> {
        constructor();
        abstract get roleName(): string;
        abstract get isOptional(): boolean;
        abstract getSupportedDataTypes(): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
        abstract get defaultSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        validateDefaultSamplingConfiguration(): void;
        abstract getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        protected abstract createDeviceRegistrationBuilder(): TRegistrationBuilder;
        createRegistration(builder?: (p0: TRegistrationBuilder) => void): TRegistration;
        abstract getRegistrationClass(): any/* kotlin.reflect.KClass<TRegistration> */;
        abstract isValidRegistration(registration: TRegistration): dk.cachet.carp.common.application.Trilean;
        isDefinitelyInvalidRegistration(registration: dk.cachet.carp.common.application.devices.DeviceRegistration): boolean;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    abstract class DeviceConfigurationBuilder<TSamplingConfigurationMapBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationMapBuilder */> {
        constructor();
        defaultSamplingConfiguration(builder: (p0: TSamplingConfigurationMapBuilder) => void): void;
        protected abstract createSamplingConfigurationMapBuilder(): TSamplingConfigurationMapBuilder;
        buildSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    abstract class DeviceRegistration {
        constructor();
        abstract get deviceId(): string;
        abstract get deviceDisplayName(): Nullable<string>;
        get registrationCreatedOn(): kotlinx.datetime.Instant;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    abstract class DeviceRegistrationBuilder<T extends dk.cachet.carp.common.application.devices.DeviceRegistration> {
        constructor();
        get deviceDisplayName(): Nullable<string>;
        set deviceDisplayName(value: Nullable<string>);
        abstract build(): T;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class MACAddressDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration {
        constructor(macAddress: dk.cachet.carp.common.application.MACAddress, deviceDisplayName?: Nullable<string>);
        get macAddress(): dk.cachet.carp.common.application.MACAddress;
        get deviceDisplayName(): Nullable<string>;
        get deviceId(): string;
        copy(macAddress?: dk.cachet.carp.common.application.MACAddress, deviceDisplayName?: Nullable<string>): dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class MACAddressDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration> {
        constructor();
        get macAddress(): string;
        set macAddress(value: string);
        build(): dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    abstract class PrimaryDeviceConfiguration<TRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration, TBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<TRegistration>> extends dk.cachet.carp.common.application.devices.DeviceConfiguration<TRegistration, TBuilder> {
        constructor();
        atStartOfStudy(): dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    function isPrimary(_this_: dk.cachet.carp.common.application.devices.DeviceConfiguration<any /*any*/, any /*any*/>): boolean;
}
export declare namespace dk.cachet.carp.common.application.devices {
    class Smartphone extends dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration, dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean, defaultSamplingConfiguration?: kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>);
        get roleName(): string;
        get isOptional(): boolean;
        get defaultSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        getSupportedDataTypes(): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder;
        getRegistrationClass(): any/* kotlin.reflect.KClass<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration> */;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.DefaultDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean, defaultSamplingConfiguration?: kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>): dk.cachet.carp.common.application.devices.Smartphone;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            create(roleName: string, builder: (p0: dk.cachet.carp.common.application.devices.SmartphoneBuilder) => void): dk.cachet.carp.common.application.devices.Smartphone;
        };
        static get Sensors(): {
            get GEOLOCATION(): dk.cachet.carp.common.application.sampling.AdaptiveGranularitySamplingScheme;
            get STEP_COUNT(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
            get NON_GRAVITATIONAL_ACCELERATION(): dk.cachet.carp.common.application.sampling.IntervalSamplingScheme;
            get ACCELERATION(): dk.cachet.carp.common.application.sampling.IntervalSamplingScheme;
            get ANGULAR_VELOCITY(): dk.cachet.carp.common.application.sampling.IntervalSamplingScheme;
        } & dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        static get Tasks(): {
            get WEB(): dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<dk.cachet.carp.common.application.tasks.WebTask, dk.cachet.carp.common.application.tasks.WebTaskBuilder>;
        } & dk.cachet.carp.common.application.tasks.TaskConfigurationList;
    }
    class SmartphoneBuilder extends dk.cachet.carp.common.application.devices.DeviceConfigurationBuilder<dk.cachet.carp.common.application.devices.SmartphoneSamplingConfigurationMapBuilder> {
        constructor();
        get isOptional(): boolean;
        set isOptional(value: boolean);
        protected createSamplingConfigurationMapBuilder(): dk.cachet.carp.common.application.devices.SmartphoneSamplingConfigurationMapBuilder;
    }
    class SmartphoneSamplingConfigurationMapBuilder /* extends dk.cachet.carp.common.application.sampling.SamplingConfigurationMapBuilder */ {
        constructor();
        geolocation(builder: (p0: dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration, dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder>) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        nonGravitationalAcceleration(builder: (p0: dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        acceleration(builder: (p0: dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        angularVelocity(builder: (p0: dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class Website extends dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration, dk.cachet.carp.common.application.devices.WebsiteDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.Map<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.WebsiteDeviceRegistrationBuilder;
        getRegistrationClass(): any/* kotlin.reflect.KClass<dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration> */;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.Website;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Sensors(): {
        } & dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        static get Tasks(): {
        } & dk.cachet.carp.common.application.tasks.TaskConfigurationList;
        static get Companion(): {
        };
    }
    class WebsiteDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration {
        constructor(url: string, userAgent: string, deviceDisplayName?: Nullable<string>);
        get url(): string;
        get userAgent(): string;
        get deviceDisplayName(): Nullable<string>;
        get deviceId(): string;
        copy(url?: string, userAgent?: string, deviceDisplayName?: Nullable<string>): dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class WebsiteDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration> {
        constructor();
        get url(): string;
        set url(value: string);
        get userAgent(): string;
        set userAgent(value: string);
        build(): dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class AdaptiveGranularitySamplingScheme extends dk.cachet.carp.common.application.sampling.BatteryAwareSamplingScheme<dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration, dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData);
        isValidBatteryLevelConfiguration(configuration: dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration): boolean;
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    abstract class BatteryAwareSamplingScheme<TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration, TBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<TConfig> */> extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfigurationBuilder<TConfig, TBuilder>> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, builder: () => TBuilder, normal: TConfig, low: TConfig, critical?: Nullable<TConfig>);
        get normal(): TConfig;
        get low(): TConfig;
        get critical(): Nullable<TConfig>;
        protected createSamplingConfigurationBuilder(): dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfigurationBuilder<TConfig, TBuilder>;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
        abstract isValidBatteryLevelConfiguration(configuration: TConfig): boolean;
    }
    class BatteryAwareSamplingConfiguration<TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration> implements dk.cachet.carp.common.application.sampling.SamplingConfiguration {
        constructor(normal: TConfig, low: TConfig, critical?: Nullable<TConfig>);
        get normal(): TConfig;
        get low(): TConfig;
        get critical(): Nullable<TConfig>;
        copy(normal?: TConfig, low?: TConfig, critical?: Nullable<TConfig>): dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration<TConfig>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
        static get Companion(): {
            get $cachedDescriptor(): any/* kotlinx.serialization.descriptors.SerialDescriptor */;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    class BatteryAwareSamplingConfigurationBuilder<TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration, TBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<TConfig> */> /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration<TConfig>> */ {
        constructor(createBuilder: () => TBuilder, normal: TConfig, low: TConfig, critical: Nullable<TConfig>);
        batteryNormal(builder: (p0: TBuilder) => void): void;
        batteryLow(builder: (p0: TBuilder) => void): void;
        batteryCritical(builder: (p0: TBuilder) => void): void;
        allBatteryLevels(builder: (p0: TBuilder) => void): void;
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    abstract class DataTypeSamplingScheme<TConfigBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<any> */> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, _default: dk.cachet.carp.common.application.sampling.SamplingConfiguration);
        get dataType(): dk.cachet.carp.common.application.data.DataTypeMetaData;
        get default(): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        protected abstract createSamplingConfigurationBuilder(): TConfigBuilder;
        samplingConfiguration(builder: (p0: TConfigBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        measure(samplingConfigurationBuilder?: Nullable<(p0: TConfigBuilder) => void>): dk.cachet.carp.common.application.tasks.Measure.DataStream;
        abstract isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    class DataTypeSamplingSchemeMap /* extends dk.cachet.carp.common.application.EnumObjectMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */ {
        constructor();
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class GranularitySamplingScheme extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, defaultGranularity: dk.cachet.carp.common.application.sampling.Granularity);
        get defaultGranularity(): dk.cachet.carp.common.application.sampling.Granularity;
        protected createSamplingConfigurationBuilder(): dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    abstract class Granularity {
        private constructor();
        static get Detailed(): dk.cachet.carp.common.application.sampling.Granularity & {
            get name(): "Detailed";
            get ordinal(): 0;
        };
        static get Balanced(): dk.cachet.carp.common.application.sampling.Granularity & {
            get name(): "Balanced";
            get ordinal(): 1;
        };
        static get Coarse(): dk.cachet.carp.common.application.sampling.Granularity & {
            get name(): "Coarse";
            get ordinal(): 2;
        };
        static values(): Array<dk.cachet.carp.common.application.sampling.Granularity>;
        static valueOf(value: string): dk.cachet.carp.common.application.sampling.Granularity;
        get name(): "Detailed" | "Balanced" | "Coarse";
        get ordinal(): 0 | 1 | 2;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    class GranularitySamplingConfiguration implements dk.cachet.carp.common.application.sampling.SamplingConfiguration {
        constructor(granularity: dk.cachet.carp.common.application.sampling.Granularity);
        get granularity(): dk.cachet.carp.common.application.sampling.Granularity;
        copy(granularity?: dk.cachet.carp.common.application.sampling.Granularity): dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
    class GranularitySamplingConfigurationBuilder /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration> */ {
        constructor(granularity: dk.cachet.carp.common.application.sampling.Granularity);
        get granularity(): dk.cachet.carp.common.application.sampling.Granularity;
        set granularity(value: dk.cachet.carp.common.application.sampling.Granularity);
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class IntervalSamplingScheme extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, defaultMeasureInterval: kotlin.time.Duration, validOptions?: Nullable<any>/* Nullable<kotlin.collections.Set<kotlin.time.Duration>> */);
        get defaultMeasureInterval(): kotlin.time.Duration;
        get validOptions(): Nullable<any>/* Nullable<kotlin.collections.Set<kotlin.time.Duration>> */;
        protected createSamplingConfigurationBuilder(): dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    class IntervalSamplingConfiguration implements dk.cachet.carp.common.application.sampling.SamplingConfiguration {
        constructor(interval: kotlin.time.Duration);
        get interval(): kotlin.time.Duration;
        copy(interval?: kotlin.time.Duration): dk.cachet.carp.common.application.sampling.IntervalSamplingConfiguration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
    class IntervalSamplingConfigurationBuilder /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.IntervalSamplingConfiguration> */ {
        private constructor();
        get interval(): kotlin.time.Duration;
        set interval(value: kotlin.time.Duration);
        get validOptions(): Nullable<any>/* Nullable<kotlin.collections.Set<kotlin.time.Duration>> */;
        nearestOption(interval: kotlin.time.Duration): kotlin.time.Duration;
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class NoOptionsSamplingScheme extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<typeof dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData);
        protected createSamplingConfigurationBuilder(): typeof dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfigurationBuilder;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    const NoOptionsSamplingConfiguration: {
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
    } & dk.cachet.carp.common.application.sampling.SamplingConfiguration & any/* kotlinx.serialization.internal.SerializerFactory */;
    const NoOptionsSamplingConfigurationBuilder: {
    } & any/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<typeof dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration> */;
}
export declare namespace dk.cachet.carp.common.application.sampling {
    interface SamplingConfiguration {
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.sampling.SamplingConfiguration": unique symbol;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.services {
    class ApiVersion {
        constructor(major: number, minor: number);
        get major(): number;
        get minor(): number;
        isMoreRecent(otherVersion: dk.cachet.carp.common.application.services.ApiVersion): boolean;
        toString(): string;
        copy(major?: number, minor?: number): dk.cachet.carp.common.application.services.ApiVersion;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            fromString(apiVersion: string): dk.cachet.carp.common.application.services.ApiVersion;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class BackgroundTask implements dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(name: string, measures?: kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>, description?: Nullable<string>, duration?: kotlin.time.Duration);
        get name(): string;
        get measures(): kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>;
        get description(): Nullable<string>;
        get duration(): kotlin.time.Duration;
        copy(name?: string, measures?: kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>, description?: Nullable<string>, duration?: kotlin.time.Duration): dk.cachet.carp.common.application.tasks.BackgroundTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */>["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
    class BackgroundTaskBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<dk.cachet.carp.common.application.tasks.BackgroundTask> {
        constructor(duration?: kotlin.time.Duration);
        get duration(): kotlin.time.Duration;
        set duration(value: kotlin.time.Duration);
        build(name: string): dk.cachet.carp.common.application.tasks.BackgroundTask;
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class CustomProtocolTask implements dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(name: string, studyProtocol: string);
        get name(): string;
        get studyProtocol(): string;
        get description(): Nullable<string>;
        get measures(): kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>;
        copy(name?: string, studyProtocol?: string): dk.cachet.carp.common.application.tasks.CustomProtocolTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */>["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    abstract class Measure {
        protected constructor();
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace Measure {
        class DataStream extends dk.cachet.carp.common.application.tasks.Measure {
            constructor(type: dk.cachet.carp.common.application.NamespacedId, overrideSamplingConfiguration?: Nullable<dk.cachet.carp.common.application.sampling.SamplingConfiguration>);
            get type(): dk.cachet.carp.common.application.NamespacedId;
            get overrideSamplingConfiguration(): Nullable<dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
            copy(type?: dk.cachet.carp.common.application.NamespacedId, overrideSamplingConfiguration?: Nullable<dk.cachet.carp.common.application.sampling.SamplingConfiguration>): dk.cachet.carp.common.application.tasks.Measure.DataStream;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class TriggerData extends dk.cachet.carp.common.application.tasks.Measure {
            constructor(triggerId: number);
            get triggerId(): number;
            copy(triggerId?: number): dk.cachet.carp.common.application.tasks.Measure.TriggerData;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    interface TaskConfiguration<TData extends dk.cachet.carp.common.application.data.Data> {
        readonly name: string;
        readonly measures: kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>;
        readonly description: Nullable<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.tasks.TaskConfiguration": unique symbol;
        };
    }
    function getAllExpectedDataTypes(_this_: dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>): kotlin.collections.Set<dk.cachet.carp.common.application.NamespacedId>;
    abstract class TaskConfigurationBuilder<TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>> {
        constructor();
        get measures(): kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>;
        set measures(value: kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        abstract build(name: string): TConfiguration;
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class TaskConfigurationList /* implements kotlin.collections.List<dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<any, any>> */ {
        private constructor();
        static create(): dk.cachet.carp.common.application.tasks.TaskConfigurationList;
        get BACKGROUND(): dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<dk.cachet.carp.common.application.tasks.BackgroundTask, dk.cachet.carp.common.application.tasks.BackgroundTaskBuilder>;
        protected add<TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>, TBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<TConfiguration>>(builder: () => TBuilder): dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<TConfiguration, TBuilder>;
    }
    class SupportedTaskConfiguration<TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>, TBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<TConfiguration>> {
        constructor(createBuilder: () => TBuilder);
        create(name: string, builder: (p0: TBuilder) => void): TConfiguration;
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class WebTask implements dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(name: string, url: string, description?: Nullable<string>, measures?: kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>);
        get name(): string;
        get url(): string;
        get description(): Nullable<string>;
        get measures(): kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>;
        constructUrl(participantId: dk.cachet.carp.common.application.UUID, studyDeploymentId: dk.cachet.carp.common.application.UUID, triggerId: number): string;
        copy(name?: string, url?: string, description?: Nullable<string>, measures?: kotlin.collections.List<dk.cachet.carp.common.application.tasks.Measure>): dk.cachet.carp.common.application.tasks.WebTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */>["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
    namespace WebTask {
        abstract class UrlVariable {
            private constructor();
            get pattern(): string;
            static get PARTICIPANT_ID(): dk.cachet.carp.common.application.tasks.WebTask.UrlVariable & {
                get name(): "PARTICIPANT_ID";
                get ordinal(): 0;
            };
            static get DEPLOYMENT_ID(): dk.cachet.carp.common.application.tasks.WebTask.UrlVariable & {
                get name(): "DEPLOYMENT_ID";
                get ordinal(): 1;
            };
            static get TRIGGER_ID(): dk.cachet.carp.common.application.tasks.WebTask.UrlVariable & {
                get name(): "TRIGGER_ID";
                get ordinal(): 2;
            };
            static values(): Array<dk.cachet.carp.common.application.tasks.WebTask.UrlVariable>;
            static valueOf(value: string): dk.cachet.carp.common.application.tasks.WebTask.UrlVariable;
            get name(): "PARTICIPANT_ID" | "DEPLOYMENT_ID" | "TRIGGER_ID";
            get ordinal(): 0 | 1 | 2;
        }
    }
    class WebTaskBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<dk.cachet.carp.common.application.tasks.WebTask> {
        constructor();
        get url(): string;
        set url(value: string);
        build(name: string): dk.cachet.carp.common.application.tasks.WebTask;
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class ElapsedTimeTrigger extends dk.cachet.carp.common.application.triggers.TriggerConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        private constructor();
        get sourceDeviceRoleName(): string;
        get elapsedTime(): kotlin.time.Duration;
        get requiresPrimaryDevice(): boolean;
        static create(sourceDevice: dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any /*any*/, any /*any*/>, elapsedTime: kotlin.time.Duration): dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger;
        copy(sourceDeviceRoleName?: string, elapsedTime?: kotlin.time.Duration): dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class ManualTrigger extends dk.cachet.carp.common.application.triggers.TriggerConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(sourceDeviceRoleName: string, label: string, description?: Nullable<string>);
        get sourceDeviceRoleName(): string;
        get label(): string;
        get description(): Nullable<string>;
        get requiresPrimaryDevice(): boolean;
        copy(sourceDeviceRoleName?: string, label?: string, description?: Nullable<string>): dk.cachet.carp.common.application.triggers.ManualTrigger;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class ScheduledTrigger extends dk.cachet.carp.common.application.triggers.TriggerConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        private constructor();
        get sourceDeviceRoleName(): string;
        get time(): dk.cachet.carp.common.application.TimeOfDay;
        get recurrenceRule(): dk.cachet.carp.common.application.RecurrenceRule;
        get requiresPrimaryDevice(): boolean;
        static create(sourceDevice: dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any /*any*/, any /*any*/>, time: dk.cachet.carp.common.application.TimeOfDay, recurrenceRule: dk.cachet.carp.common.application.RecurrenceRule): dk.cachet.carp.common.application.triggers.ScheduledTrigger;
        copy(sourceDeviceRoleName?: string, time?: dk.cachet.carp.common.application.TimeOfDay, recurrenceRule?: dk.cachet.carp.common.application.RecurrenceRule): dk.cachet.carp.common.application.triggers.ScheduledTrigger;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class TaskControl {
        constructor(triggerId: number, taskName: string, destinationDeviceRoleName: string, control: dk.cachet.carp.common.application.triggers.TaskControl.Control);
        get triggerId(): number;
        get taskName(): string;
        get destinationDeviceRoleName(): string;
        get control(): dk.cachet.carp.common.application.triggers.TaskControl.Control;
        copy(triggerId?: number, taskName?: string, destinationDeviceRoleName?: string, control?: dk.cachet.carp.common.application.triggers.TaskControl.Control): dk.cachet.carp.common.application.triggers.TaskControl;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace TaskControl {
        abstract class Control {
            private constructor();
            static get Start(): dk.cachet.carp.common.application.triggers.TaskControl.Control & {
                get name(): "Start";
                get ordinal(): 0;
            };
            static get Stop(): dk.cachet.carp.common.application.triggers.TaskControl.Control & {
                get name(): "Stop";
                get ordinal(): 1;
            };
            static values(): Array<dk.cachet.carp.common.application.triggers.TaskControl.Control>;
            static valueOf(value: string): dk.cachet.carp.common.application.triggers.TaskControl.Control;
            get name(): "Start" | "Stop";
            get ordinal(): 0 | 1;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    abstract class TriggerConfiguration<TData extends dk.cachet.carp.common.application.data.Data> {
        constructor();
        get requiresPrimaryDevice(): boolean;
        abstract get sourceDeviceRoleName(): string;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    abstract class AccountIdentity {
        constructor();
        static get Companion(): {
            fromEmailAddress(emailAddress: string): dk.cachet.carp.common.application.users.EmailAccountIdentity;
            fromUsername(username: string): dk.cachet.carp.common.application.users.UsernameAccountIdentity;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    class EmailAccountIdentity extends dk.cachet.carp.common.application.users.AccountIdentity {
        constructor(emailAddress: dk.cachet.carp.common.application.EmailAddress);
        get emailAddress(): dk.cachet.carp.common.application.EmailAddress;
        static create(emailAddress: string): dk.cachet.carp.common.application.users.EmailAccountIdentity;
        copy(emailAddress?: dk.cachet.carp.common.application.EmailAddress): dk.cachet.carp.common.application.users.EmailAccountIdentity;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class UsernameAccountIdentity extends dk.cachet.carp.common.application.users.AccountIdentity {
        constructor(username: dk.cachet.carp.common.application.users.Username);
        get username(): dk.cachet.carp.common.application.users.Username;
        static create(username: string): dk.cachet.carp.common.application.users.UsernameAccountIdentity;
        copy(username?: dk.cachet.carp.common.application.users.Username): dk.cachet.carp.common.application.users.UsernameAccountIdentity;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    abstract class AssignedTo {
        protected constructor();
        static get All(): {
        } & dk.cachet.carp.common.application.users.AssignedTo & any/* kotlinx.serialization.internal.SerializerFactory */;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace AssignedTo {
        class Roles extends dk.cachet.carp.common.application.users.AssignedTo {
            constructor(roleNames: kotlin.collections.Set<string>);
            get roleNames(): kotlin.collections.Set<string>;
            copy(roleNames?: kotlin.collections.Set<string>): dk.cachet.carp.common.application.users.AssignedTo.Roles;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    class ExpectedParticipantData {
        constructor(attribute: dk.cachet.carp.common.application.users.ParticipantAttribute, assignedTo?: dk.cachet.carp.common.application.users.AssignedTo);
        get attribute(): dk.cachet.carp.common.application.users.ParticipantAttribute;
        get assignedTo(): dk.cachet.carp.common.application.users.AssignedTo;
        get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
        copy(attribute?: dk.cachet.carp.common.application.users.ParticipantAttribute, assignedTo?: dk.cachet.carp.common.application.users.AssignedTo): dk.cachet.carp.common.application.users.ExpectedParticipantData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    function hasNoConflicts(_this_: kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>, exceptionOnConflict?: boolean): boolean;
}
export declare namespace dk.cachet.carp.common.application.users {
    abstract class ParticipantAttribute {
        protected constructor();
        abstract get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
        getInputElement(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList): dk.cachet.carp.common.application.data.input.elements.InputElement<any /*any*/>;
        isValidInput<TInput>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, input: TInput): boolean;
        inputToData<TInput>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, input: TInput): Nullable<dk.cachet.carp.common.application.data.Data>;
        isValidData<TData extends Nullable<dk.cachet.carp.common.application.data.Data>>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, data: TData): boolean;
        dataToInput<TData extends Nullable<dk.cachet.carp.common.application.data.Data>>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, data: TData): Nullable<any>;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace ParticipantAttribute {
        class DefaultParticipantAttribute extends dk.cachet.carp.common.application.users.ParticipantAttribute {
            constructor(inputDataType: dk.cachet.carp.common.application.NamespacedId);
            get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
            copy(inputDataType?: dk.cachet.carp.common.application.NamespacedId): dk.cachet.carp.common.application.users.ParticipantAttribute.DefaultParticipantAttribute;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class CustomParticipantAttribute<T extends any> extends dk.cachet.carp.common.application.users.ParticipantAttribute {
            constructor(input: dk.cachet.carp.common.application.data.input.elements.InputElement<T>);
            get input(): dk.cachet.carp.common.application.data.input.elements.InputElement<T>;
            get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
            copy(input?: dk.cachet.carp.common.application.data.input.elements.InputElement<T>): dk.cachet.carp.common.application.users.ParticipantAttribute.CustomParticipantAttribute<T>;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
                get $cachedDescriptor(): any/* kotlinx.serialization.descriptors.SerialDescriptor */;
            } & any/* kotlinx.serialization.internal.SerializerFactory */;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    class ParticipantRole {
        constructor(role: string, isOptional: boolean);
        get role(): string;
        get isOptional(): boolean;
        copy(role?: string, isOptional?: boolean): dk.cachet.carp.common.application.users.ParticipantRole;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    class Username {
        constructor(name: string);
        get name(): string;
        toString(): string;
        copy(name?: string): dk.cachet.carp.common.application.users.Username;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.common.domain {
    interface Snapshot<TAggregateRoot> {
        readonly id: dk.cachet.carp.common.application.UUID;
        readonly createdOn: kotlinx.datetime.Instant;
        readonly version: number;
        toObject(): TAggregateRoot;
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.domain.Snapshot": unique symbol;
        };
    }
}
export declare namespace dk.cachet.carp.common.infrastructure.serialization {
    let JSON: kotlinx.serialization.json.Json;
}
export declare namespace dk.cachet.carp.common.infrastructure.services {
    abstract class ApplicationServiceRequest<TService extends unknown/* dk.cachet.carp.common.application.services.ApplicationService<TService, any> */, TReturn> {
        constructor();
        abstract get apiVersion(): dk.cachet.carp.common.application.services.ApiVersion;
        abstract getResponseSerializer(): any/* kotlinx.serialization.KSerializer<TReturn> */;
        matchesServiceRequest(request: any/* kotlin.reflect.KCallable<any> */): boolean;
    }
}
export declare namespace dk.cachet.carp.protocols.application {
    class ProtocolVersion {
        constructor(tag: string, date?: kotlinx.datetime.Instant);
        get tag(): string;
        get date(): kotlinx.datetime.Instant;
        copy(tag?: string, date?: kotlinx.datetime.Instant): dk.cachet.carp.protocols.application.ProtocolVersion;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace dk.cachet.carp.protocols.application {
    class StudyProtocolSnapshot implements dk.cachet.carp.common.domain.Snapshot<any/* dk.cachet.carp.protocols.domain.StudyProtocol */> {
        constructor(id: dk.cachet.carp.common.application.UUID, createdOn: kotlinx.datetime.Instant, version: number, ownerId: dk.cachet.carp.common.application.UUID, name: string, description?: Nullable<string>, primaryDevices?: kotlin.collections.Set<dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any, any>>, connectedDevices?: kotlin.collections.Set<dk.cachet.carp.common.application.devices.DeviceConfiguration<any, any>>, connections?: kotlin.collections.Set<dk.cachet.carp.protocols.application.StudyProtocolSnapshot.DeviceConnection>, tasks?: kotlin.collections.Set<dk.cachet.carp.common.application.tasks.TaskConfiguration<any>>, triggers?: kotlin.collections.Map<number, dk.cachet.carp.common.application.triggers.TriggerConfiguration<any>>, taskControls?: kotlin.collections.Set<dk.cachet.carp.common.application.triggers.TaskControl>, participantRoles?: kotlin.collections.Set<dk.cachet.carp.common.application.users.ParticipantRole>, assignedDevices?: kotlin.collections.Map<string, kotlin.collections.Set<string>>, expectedParticipantData?: kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>, applicationData?: Nullable<string>);
        get id(): dk.cachet.carp.common.application.UUID;
        get createdOn(): kotlinx.datetime.Instant;
        get version(): number;
        get ownerId(): dk.cachet.carp.common.application.UUID;
        get name(): string;
        get description(): Nullable<string>;
        get primaryDevices(): kotlin.collections.Set<dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any, any>>;
        get connectedDevices(): kotlin.collections.Set<dk.cachet.carp.common.application.devices.DeviceConfiguration<any, any>>;
        get connections(): kotlin.collections.Set<dk.cachet.carp.protocols.application.StudyProtocolSnapshot.DeviceConnection>;
        get tasks(): kotlin.collections.Set<dk.cachet.carp.common.application.tasks.TaskConfiguration<any>>;
        get triggers(): kotlin.collections.Map<number, dk.cachet.carp.common.application.triggers.TriggerConfiguration<any>>;
        get taskControls(): kotlin.collections.Set<dk.cachet.carp.common.application.triggers.TaskControl>;
        get participantRoles(): kotlin.collections.Set<dk.cachet.carp.common.application.users.ParticipantRole>;
        get assignedDevices(): kotlin.collections.Map<string, kotlin.collections.Set<string>>;
        get expectedParticipantData(): kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>;
        get applicationData(): Nullable<string>;
        toObject(): any/* dk.cachet.carp.protocols.domain.StudyProtocol */;
        copy(id?: dk.cachet.carp.common.application.UUID, createdOn?: kotlinx.datetime.Instant, version?: number, ownerId?: dk.cachet.carp.common.application.UUID, name?: string, description?: Nullable<string>, primaryDevices?: kotlin.collections.Set<dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any, any>>, connectedDevices?: kotlin.collections.Set<dk.cachet.carp.common.application.devices.DeviceConfiguration<any, any>>, connections?: kotlin.collections.Set<dk.cachet.carp.protocols.application.StudyProtocolSnapshot.DeviceConnection>, tasks?: kotlin.collections.Set<dk.cachet.carp.common.application.tasks.TaskConfiguration<any>>, triggers?: kotlin.collections.Map<number, dk.cachet.carp.common.application.triggers.TriggerConfiguration<any>>, taskControls?: kotlin.collections.Set<dk.cachet.carp.common.application.triggers.TaskControl>, participantRoles?: kotlin.collections.Set<dk.cachet.carp.common.application.users.ParticipantRole>, assignedDevices?: kotlin.collections.Map<string, kotlin.collections.Set<string>>, expectedParticipantData?: kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>, applicationData?: Nullable<string>): dk.cachet.carp.protocols.application.StudyProtocolSnapshot;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.domain.Snapshot<any/* dk.cachet.carp.protocols.domain.StudyProtocol */>["__doNotUseOrImplementIt"];
        static get Companion(): {
            fromProtocol(protocol: any/* dk.cachet.carp.protocols.domain.StudyProtocol */, version: number): dk.cachet.carp.protocols.application.StudyProtocolSnapshot;
        };
    }
    namespace StudyProtocolSnapshot {
        class DeviceConnection {
            constructor(roleName: string, connectedToRoleName: string);
            get roleName(): string;
            get connectedToRoleName(): string;
            copy(roleName?: string, connectedToRoleName?: string): dk.cachet.carp.protocols.application.StudyProtocolSnapshot.DeviceConnection;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace dk.cachet.carp.protocols.infrastructure {
    abstract class ProtocolFactoryServiceRequest<TReturn> extends dk.cachet.carp.common.infrastructure.services.ApplicationServiceRequest<any/* dk.cachet.carp.protocols.application.ProtocolFactoryService */, TReturn> {
        protected constructor();
        get apiVersion(): dk.cachet.carp.common.application.services.ApiVersion;
        static get Serializer(): {
        } & any/* kotlinx.serialization.KSerializer<dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest<any>> */;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace ProtocolFactoryServiceRequest {
        class CreateCustomProtocol extends dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest<dk.cachet.carp.protocols.application.StudyProtocolSnapshot> {
            constructor(ownerId: dk.cachet.carp.common.application.UUID, name: string, customProtocol: string, description: Nullable<string>);
            get ownerId(): dk.cachet.carp.common.application.UUID;
            get name(): string;
            get customProtocol(): string;
            get description(): Nullable<string>;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<dk.cachet.carp.protocols.application.StudyProtocolSnapshot> */;
            copy(ownerId?: dk.cachet.carp.common.application.UUID, name?: string, customProtocol?: string, description?: Nullable<string>): dk.cachet.carp.protocols.infrastructure.ProtocolFactoryServiceRequest.CreateCustomProtocol;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace dk.cachet.carp.protocols.infrastructure {
    abstract class ProtocolServiceRequest<TReturn> extends dk.cachet.carp.common.infrastructure.services.ApplicationServiceRequest<any/* dk.cachet.carp.protocols.application.ProtocolService */, TReturn> {
        protected constructor();
        get apiVersion(): dk.cachet.carp.common.application.services.ApiVersion;
        static get Serializer(): {
        } & any/* kotlinx.serialization.KSerializer<dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<any>> */;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace ProtocolServiceRequest {
        class Add extends dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<void> {
            constructor(protocol: dk.cachet.carp.protocols.application.StudyProtocolSnapshot, versionTag?: string);
            get protocol(): dk.cachet.carp.protocols.application.StudyProtocolSnapshot;
            get versionTag(): string;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<void> */;
            copy(protocol?: dk.cachet.carp.protocols.application.StudyProtocolSnapshot, versionTag?: string): dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.Add;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class AddVersion extends dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<void> {
            constructor(protocol: dk.cachet.carp.protocols.application.StudyProtocolSnapshot, versionTag?: string);
            get protocol(): dk.cachet.carp.protocols.application.StudyProtocolSnapshot;
            get versionTag(): string;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<void> */;
            copy(protocol?: dk.cachet.carp.protocols.application.StudyProtocolSnapshot, versionTag?: string): dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.AddVersion;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class UpdateParticipantDataConfiguration extends dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<dk.cachet.carp.protocols.application.StudyProtocolSnapshot> {
            constructor(protocolId: dk.cachet.carp.common.application.UUID, versionTag: string, expectedParticipantData: kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>);
            get protocolId(): dk.cachet.carp.common.application.UUID;
            get versionTag(): string;
            get expectedParticipantData(): kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<dk.cachet.carp.protocols.application.StudyProtocolSnapshot> */;
            copy(protocolId?: dk.cachet.carp.common.application.UUID, versionTag?: string, expectedParticipantData?: kotlin.collections.Set<dk.cachet.carp.common.application.users.ExpectedParticipantData>): dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.UpdateParticipantDataConfiguration;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class GetBy extends dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<dk.cachet.carp.protocols.application.StudyProtocolSnapshot> {
            constructor(protocolId: dk.cachet.carp.common.application.UUID, versionTag?: Nullable<string>);
            get protocolId(): dk.cachet.carp.common.application.UUID;
            get versionTag(): Nullable<string>;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<dk.cachet.carp.protocols.application.StudyProtocolSnapshot> */;
            copy(protocolId?: dk.cachet.carp.common.application.UUID, versionTag?: Nullable<string>): dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetBy;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class GetAllForOwner extends dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<kotlin.collections.List<dk.cachet.carp.protocols.application.StudyProtocolSnapshot>> {
            constructor(ownerId: dk.cachet.carp.common.application.UUID);
            get ownerId(): dk.cachet.carp.common.application.UUID;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<kotlin.collections.List<dk.cachet.carp.protocols.application.StudyProtocolSnapshot>> */;
            copy(ownerId?: dk.cachet.carp.common.application.UUID): dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetAllForOwner;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class GetVersionHistoryFor extends dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest<kotlin.collections.List<dk.cachet.carp.protocols.application.ProtocolVersion>> {
            constructor(protocolId: dk.cachet.carp.common.application.UUID);
            get protocolId(): dk.cachet.carp.common.application.UUID;
            getResponseSerializer(): any/* kotlinx.serialization.KSerializer<kotlin.collections.List<dk.cachet.carp.protocols.application.ProtocolVersion>> */;
            copy(protocolId?: dk.cachet.carp.common.application.UUID): dk.cachet.carp.protocols.infrastructure.ProtocolServiceRequest.GetVersionHistoryFor;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export as namespace dk_cachet_carp_protocols_carp_protocols_core;