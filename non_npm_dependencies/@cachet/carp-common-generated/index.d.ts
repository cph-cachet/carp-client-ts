type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace kotlin.collections {
    interface KtList<out E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    namespace KtList {
        function fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
    }
    interface KtMap<K, out V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    namespace KtMap {
        function fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
    }
    interface KtMutableList<E> extends kotlin.collections.KtList<E>/*, kotlin.collections.MutableCollection<E> */ {
        asJsArrayView(): Array<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMutableList": unique symbol;
        } & kotlin.collections.KtList<any>["__doNotUseOrImplementIt"];
    }
    namespace KtMutableList {
        function fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtMutableList<E>;
    }
    interface KtSet<out E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlySetView(): ReadonlySet<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtSet": unique symbol;
        };
    }
    namespace KtSet {
        function fromJsSet<E>(set: ReadonlySet<E>): kotlin.collections.KtSet<E>;
    }
}
export declare namespace dk.cachet.carp.common.application {
    class ApplicationData {
        constructor(data: string);
        get data(): string;
        copy(data?: string): dk.cachet.carp.common.application.ApplicationData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace ApplicationData {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ApplicationData;
        }
    }
}
export declare namespace dk.cachet.carp.common.application {
    class EmailAddress {
        constructor(address: string);
        get address(): string;
        toString(): string;
        copy(address?: string): dk.cachet.carp.common.application.EmailAddress;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace EmailAddress {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmailAddress;
        }
    }
}
export declare namespace dk.cachet.carp.common.application {
    function toEpochMicroseconds(_this_: kotlin.time.Instant): bigint;
}
export declare namespace dk.cachet.carp.common.application {
    class MACAddress {
        constructor(address: string);
        get address(): string;
        toString(): string;
        copy(address?: string): dk.cachet.carp.common.application.MACAddress;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace MACAddress {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MACAddress;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    parse(address: string): dk.cachet.carp.common.application.MACAddress;
                    private constructor();
                }
            }
        }
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
    }
    namespace NamespacedId {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NamespacedId;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    fromString(fullyQualifiedName: string): dk.cachet.carp.common.application.NamespacedId;
                    private constructor();
                }
            }
        }
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
    }
    namespace RecurrenceRule {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RecurrenceRule;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    secondly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    minutely(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    hourly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    daily(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    weekly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    monthly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    yearly(interval?: number, end?: dk.cachet.carp.common.application.RecurrenceRule.End): dk.cachet.carp.common.application.RecurrenceRule;
                    fromString(rrule: string): dk.cachet.carp.common.application.RecurrenceRule;
                    private constructor();
                }
            }
        }
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
            static values(): [typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.SECONDLY, typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.MINUTELY, typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.HOURLY, typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.DAILY, typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.WEEKLY, typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.MONTHLY, typeof dk.cachet.carp.common.application.RecurrenceRule.Frequency.YEARLY];
            static valueOf(value: string): dk.cachet.carp.common.application.RecurrenceRule.Frequency;
            get name(): "SECONDLY" | "MINUTELY" | "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
            get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6;
        }
        namespace Frequency {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Frequency;
            }
        }
        abstract class End {
            private constructor();
        }
        namespace End {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => End;
            }
            class Until extends dk.cachet.carp.common.application.RecurrenceRule.End.$metadata$.constructor {
                constructor(elapsedTime: kotlin.time.Duration);
                get elapsedTime(): kotlin.time.Duration;
                toString(): string;
                copy(elapsedTime?: kotlin.time.Duration): dk.cachet.carp.common.application.RecurrenceRule.End.Until;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
            }
            namespace Until {
                /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
                namespace $metadata$ {
                    const constructor: abstract new () => Until;
                }
            }
            class Count extends dk.cachet.carp.common.application.RecurrenceRule.End.$metadata$.constructor {
                constructor(count: number);
                get count(): number;
                toString(): string;
                copy(count?: number): dk.cachet.carp.common.application.RecurrenceRule.End.Count;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
            }
            namespace Count {
                /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
                namespace $metadata$ {
                    const constructor: abstract new () => Count;
                }
            }
            abstract class Never extends KtSingleton<Never.$metadata$.constructor>() {
                private constructor();
            }
            namespace Never {
                /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
                namespace $metadata$ {
                    abstract class constructor extends dk.cachet.carp.common.application.RecurrenceRule.End.$metadata$.constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                        private constructor();
                    }
                }
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
    }
    namespace TimeOfDay {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TimeOfDay;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    fromString(time: string): dk.cachet.carp.common.application.TimeOfDay;
                    private constructor();
                }
            }
        }
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
        static values(): [typeof dk.cachet.carp.common.application.Trilean.TRUE, typeof dk.cachet.carp.common.application.Trilean.FALSE, typeof dk.cachet.carp.common.application.Trilean.UNKNOWN];
        static valueOf(value: string): dk.cachet.carp.common.application.Trilean;
        get name(): "TRUE" | "FALSE" | "UNKNOWN";
        get ordinal(): 0 | 1 | 2;
    }
    namespace Trilean {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Trilean;
        }
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
    }
    namespace UUID {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UUID;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    parse(uuid: string): dk.cachet.carp.common.application.UUID;
                    randomUUID(): dk.cachet.carp.common.application.UUID;
                    private constructor();
                }
            }
        }
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
    }
    namespace Acceleration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Acceleration;
        }
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
    }
    namespace AngularVelocity {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AngularVelocity;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    abstract class CarpDataTypes extends KtSingleton<CarpDataTypes.$metadata$.constructor>() {
        private constructor();
    }
    namespace CarpDataTypes {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor extends dk.cachet.carp.common.application.data.DataTypeMetaDataMap.$metadata$.constructor {
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
                asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData>;
                get size(): number;
                get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
                get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.data.DataTypeMetaData> */;
                get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData> */>;
                private constructor();
            }
        }
    }
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
    }
    namespace CompletedTask {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CompletedTask;
        }
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
    namespace DataTypeMetaData {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DataTypeMetaData;
        }
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
        static values(): [typeof dk.cachet.carp.common.application.data.DataTimeType.POINT, typeof dk.cachet.carp.common.application.data.DataTimeType.TIME_SPAN];
        static valueOf(value: string): dk.cachet.carp.common.application.data.DataTimeType;
        get name(): "POINT" | "TIME_SPAN";
        get ordinal(): 0 | 1;
    }
    namespace DataTimeType {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DataTimeType;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class DataTypeMetaDataMap /* extends dk.cachet.carp.common.application.EnumObjectMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData> */ implements kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData> {
        constructor();
        add(fullyQualifiedName: string, displayName: string, timeType: dk.cachet.carp.common.application.data.DataTimeType): dk.cachet.carp.common.application.data.DataTypeMetaData;
        asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData>;
        get size(): number;
        get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.data.DataTypeMetaData> */;
        get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.DataTypeMetaData> */>;
        readonly __doNotUseOrImplementIt: kotlin.collections.KtMap<any, any>["__doNotUseOrImplementIt"];
    }
    namespace DataTypeMetaDataMap {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DataTypeMetaDataMap;
        }
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
    }
    namespace ECG {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ECG;
        }
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
    }
    namespace EDA {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EDA;
        }
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
    }
    namespace Geolocation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Geolocation;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get MIN_LATITUDE(): number;
                    get MAX_LATITUDE(): number;
                    get MIN_LONGITUDE(): number;
                    get MAX_LONGITUDE(): number;
                    private constructor();
                }
            }
        }
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
    }
    namespace HeartRate {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => HeartRate;
        }
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
    }
    namespace InterbeatInterval {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InterbeatInterval;
        }
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
    }
    namespace NonGravitationalAcceleration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NonGravitationalAcceleration;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data {
    class PPG implements dk.cachet.carp.common.application.data.SensorData {
        constructor(lightSources: kotlin.collections.KtMap<string, number>, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>);
        get lightSources(): kotlin.collections.KtMap<string, number>;
        get sensorSpecificData(): Nullable<dk.cachet.carp.common.application.data.Data>;
        copy(lightSources?: kotlin.collections.KtMap<string, number>, sensorSpecificData?: Nullable<dk.cachet.carp.common.application.data.Data>): dk.cachet.carp.common.application.data.PPG;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.SensorData["__doNotUseOrImplementIt"];
    }
    namespace PPG {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PPG;
        }
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
    }
    namespace SensorSkinContact {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SensorSkinContact;
        }
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
    }
    namespace SignalStrength {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SignalStrength;
        }
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
    }
    namespace StepCount {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StepCount;
        }
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
    }
    namespace TriggeredTask {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TriggeredTask;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data.input {
    abstract class CarpInputDataTypes extends KtSingleton<CarpInputDataTypes.$metadata$.constructor>() {
        private constructor();
    }
    namespace CarpInputDataTypes {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor extends dk.cachet.carp.common.application.data.input.InputDataTypeList.$metadata$.constructor {
                get CARP_NAMESPACE(): string;
                get SEX(): dk.cachet.carp.common.application.NamespacedId;
                private constructor();
            }
        }
    }
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
    }
    namespace CustomInput {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CustomInput;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data.input {
    class InputDataTypeList implements kotlin.collections.KtList<dk.cachet.carp.common.application.NamespacedId> {
        private constructor();
        get list(): kotlin.collections.KtMutableList<dk.cachet.carp.common.application.NamespacedId>;
        static create(): dk.cachet.carp.common.application.data.input.InputDataTypeList;
        get inputElements(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.data.input.elements.InputElement<any /*any*/>>;
        get dataClasses(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, any/* kotlin.reflect.KClass<any> */>;
        get inputToDataConverters(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, (p0: any) => dk.cachet.carp.common.application.data.Data>;
        get dataToInputConverters(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, (p0: dk.cachet.carp.common.application.data.Data) => any>;
        protected add<TInput extends any, TData extends dk.cachet.carp.common.application.data.Data>(inputDataType: dk.cachet.carp.common.application.NamespacedId, inputElement: dk.cachet.carp.common.application.data.input.elements.InputElement<TInput>, dataClass: any/* kotlin.reflect.KClass<TData> */, inputToData: (p0: TInput) => TData, dataToInput: (p0: TData) => TInput): dk.cachet.carp.common.application.NamespacedId;
        asJsReadonlyArrayView(): ReadonlyArray<dk.cachet.carp.common.application.NamespacedId>;
        readonly __doNotUseOrImplementIt: kotlin.collections.KtList<any>["__doNotUseOrImplementIt"];
    }
    namespace InputDataTypeList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => InputDataTypeList;
        }
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
        static values(): [typeof dk.cachet.carp.common.application.data.input.Sex.Male, typeof dk.cachet.carp.common.application.data.input.Sex.Female, typeof dk.cachet.carp.common.application.data.input.Sex.Intersex];
        static valueOf(value: string): dk.cachet.carp.common.application.data.input.Sex;
        get name(): "Male" | "Female" | "Intersex";
        get ordinal(): 0 | 1 | 2;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.Data["__doNotUseOrImplementIt"];
    }
    namespace Sex {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Sex;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data.input.elements {
    interface InputElement<TData extends any> {
        readonly prompt: string;
        isValid(input: TData): boolean;
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.data.input.elements.InputElement": unique symbol;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.data.input.elements {
    class SelectOne implements dk.cachet.carp.common.application.data.input.elements.InputElement<string> {
        constructor(prompt: string, options: kotlin.collections.KtSet<string>);
        get prompt(): string;
        get options(): kotlin.collections.KtSet<string>;
        isValid(input: string): boolean;
        copy(prompt?: string, options?: kotlin.collections.KtSet<string>): dk.cachet.carp.common.application.data.input.elements.SelectOne;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.input.elements.InputElement<any>["__doNotUseOrImplementIt"];
    }
    namespace SelectOne {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SelectOne;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.data.input.elements {
    class Text implements dk.cachet.carp.common.application.data.input.elements.InputElement<string> {
        constructor(prompt: string);
        get prompt(): string;
        isValid(input: string): boolean;
        copy(prompt?: string): dk.cachet.carp.common.application.data.input.elements.Text;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.data.input.elements.InputElement<any>["__doNotUseOrImplementIt"];
    }
    namespace Text {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Text;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class AltBeacon extends dk.cachet.carp.common.application.devices.DeviceConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration, dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistrationBuilder;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.AltBeacon;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace AltBeacon {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AltBeacon;
        }
        abstract class Sensors extends KtSingleton<Sensors.$metadata$.constructor>() {
            private constructor();
        }
        namespace Sensors {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap.$metadata$.constructor {
                    get SIGNAL_STRENGTH(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
                    asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>>;
                    get size(): number;
                    get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
                    get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */;
                    get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */>;
                    private constructor();
                }
            }
        }
        abstract class Tasks extends KtSingleton<Tasks.$metadata$.constructor>() {
            private constructor();
        }
        namespace Tasks {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.tasks.TaskConfigurationList.$metadata$.constructor {
                    private constructor();
                }
            }
        }
    }
    class AltBeaconDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration.$metadata$.constructor {
        constructor(manufacturerId: number, organizationId: dk.cachet.carp.common.application.UUID, majorId: number, minorId: number, referenceRssi: number, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant);
        get manufacturerId(): number;
        get organizationId(): dk.cachet.carp.common.application.UUID;
        get majorId(): number;
        get minorId(): number;
        get referenceRssi(): number;
        get deviceDisplayName(): Nullable<string>;
        get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
        get registrationCreatedOn(): kotlin.time.Instant;
        get deviceId(): string;
        copy(manufacturerId?: number, organizationId?: dk.cachet.carp.common.application.UUID, majorId?: number, minorId?: number, referenceRssi?: number, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant): dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace AltBeaconDeviceRegistration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AltBeaconDeviceRegistration;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get REFERENCE_RSS_RANGE(): any/* kotlin.ranges.IntRange */;
                    private constructor();
                }
            }
        }
    }
    class AltBeaconDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.devices.AltBeaconDeviceRegistration> {
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
    }
    namespace AltBeaconDeviceRegistrationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AltBeaconDeviceRegistrationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class BLEHeartRateDevice extends dk.cachet.carp.common.application.devices.DeviceConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration, dk.cachet.carp.common.application.devices.MACAddressDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.MACAddressDeviceRegistrationBuilder;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.BLEHeartRateDevice;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace BLEHeartRateDevice {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BLEHeartRateDevice;
        }
        abstract class Sensors extends KtSingleton<Sensors.$metadata$.constructor>() {
            private constructor();
        }
        namespace Sensors {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap.$metadata$.constructor {
                    get HEART_RATE(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
                    get INTERBEAT_INTERVAL(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
                    get SENSOR_SKIN_CONTACT(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
                    asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>>;
                    get size(): number;
                    get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
                    get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */;
                    get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */>;
                    private constructor();
                }
            }
        }
        abstract class Tasks extends KtSingleton<Tasks.$metadata$.constructor>() {
            private constructor();
        }
        namespace Tasks {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.tasks.TaskConfigurationList.$metadata$.constructor {
                    private constructor();
                }
            }
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class BLESerialNumberDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration.$metadata$.constructor {
        constructor(serialNumber: string, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant);
        get serialNumber(): string;
        get deviceDisplayName(): Nullable<string>;
        get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
        get registrationCreatedOn(): kotlin.time.Instant;
        get deviceId(): string;
        copy(serialNumber?: string, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant): dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace BLESerialNumberDeviceRegistration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BLESerialNumberDeviceRegistration;
        }
    }
    class BLESerialNumberDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration> {
        constructor();
        get serialNumber(): string;
        set serialNumber(value: string);
        build(): dk.cachet.carp.common.application.devices.BLESerialNumberDeviceRegistration;
    }
    namespace BLESerialNumberDeviceRegistrationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BLESerialNumberDeviceRegistrationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class CustomProtocolDevice extends dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration, dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.DefaultDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.CustomProtocolDevice;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace CustomProtocolDevice {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CustomProtocolDevice;
        }
        abstract class Sensors extends KtSingleton<Sensors.$metadata$.constructor>() {
            private constructor();
        }
        namespace Sensors {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap.$metadata$.constructor {
                    asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>>;
                    get size(): number;
                    get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
                    get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */;
                    get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */>;
                    private constructor();
                }
            }
        }
        abstract class Tasks extends KtSingleton<Tasks.$metadata$.constructor>() {
            private constructor();
        }
        namespace Tasks {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.tasks.TaskConfigurationList.$metadata$.constructor {
                    private constructor();
                }
            }
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class DefaultDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration.$metadata$.constructor {
        constructor(deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, deviceId?: string, registrationCreatedOn?: kotlin.time.Instant);
        get deviceDisplayName(): Nullable<string>;
        get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
        get deviceId(): string;
        get registrationCreatedOn(): kotlin.time.Instant;
        copy(deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, deviceId?: string, registrationCreatedOn?: kotlin.time.Instant): dk.cachet.carp.common.application.devices.DefaultDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace DefaultDeviceRegistration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DefaultDeviceRegistration;
        }
    }
    class DefaultDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration> {
        constructor();
        get deviceId(): string;
        set deviceId(value: string);
        build(): dk.cachet.carp.common.application.devices.DefaultDeviceRegistration;
    }
    namespace DefaultDeviceRegistrationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DefaultDeviceRegistrationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    abstract class DeviceConfiguration<TRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration, out TRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<TRegistration>> {
        constructor();
        abstract get roleName(): string;
        abstract get isOptional(): boolean;
        abstract getSupportedDataTypes(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        abstract get defaultSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        validateDefaultSamplingConfiguration(): void;
        abstract getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        protected abstract createDeviceRegistrationBuilder(): TRegistrationBuilder;
        createRegistration(builder?: (p0: TRegistrationBuilder) => void): TRegistration;
        abstract isValidRegistration(registration: TRegistration): dk.cachet.carp.common.application.Trilean;
        isDefinitelyInvalidRegistration(registration: dk.cachet.carp.common.application.devices.DeviceRegistration): boolean;
    }
    namespace DeviceConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration, TRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<TRegistration>>() => DeviceConfiguration<TRegistration, TRegistrationBuilder>;
        }
    }
    abstract class DeviceConfigurationBuilder<TSamplingConfigurationMapBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationMapBuilder */> {
        constructor();
        defaultSamplingConfiguration(builder: (p0: TSamplingConfigurationMapBuilder) => void): void;
        protected abstract createSamplingConfigurationMapBuilder(): TSamplingConfigurationMapBuilder;
        buildSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
    }
    namespace DeviceConfigurationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TSamplingConfigurationMapBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationMapBuilder */>() => DeviceConfigurationBuilder<TSamplingConfigurationMapBuilder>;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    abstract class DeviceRegistration {
        constructor();
        abstract get deviceId(): string;
        abstract get deviceDisplayName(): Nullable<string>;
        abstract get registrationCreatedOn(): kotlin.time.Instant;
        abstract get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
    }
    namespace DeviceRegistration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DeviceRegistration;
        }
    }
    abstract class DeviceRegistrationBuilder<T extends dk.cachet.carp.common.application.devices.DeviceRegistration> {
        constructor();
        get deviceDisplayName(): Nullable<string>;
        set deviceDisplayName(value: Nullable<string>);
        get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
        set additionalSpecifications(value: Nullable<dk.cachet.carp.common.application.ApplicationData>);
        abstract build(): T;
    }
    namespace DeviceRegistrationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T extends dk.cachet.carp.common.application.devices.DeviceRegistration>() => DeviceRegistrationBuilder<T>;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class MACAddressDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration.$metadata$.constructor {
        constructor(macAddress: dk.cachet.carp.common.application.MACAddress, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant);
        get macAddress(): dk.cachet.carp.common.application.MACAddress;
        get deviceDisplayName(): Nullable<string>;
        get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
        get registrationCreatedOn(): kotlin.time.Instant;
        get deviceId(): string;
        copy(macAddress?: dk.cachet.carp.common.application.MACAddress, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant): dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace MACAddressDeviceRegistration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MACAddressDeviceRegistration;
        }
    }
    class MACAddressDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration> {
        constructor();
        get macAddress(): string;
        set macAddress(value: string);
        build(): dk.cachet.carp.common.application.devices.MACAddressDeviceRegistration;
    }
    namespace MACAddressDeviceRegistrationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MACAddressDeviceRegistrationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    abstract class PrimaryDeviceConfiguration<TRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration, out TBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<TRegistration>> extends dk.cachet.carp.common.application.devices.DeviceConfiguration.$metadata$.constructor<TRegistration, TBuilder> {
        constructor();
        atStartOfStudy(): dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger;
    }
    namespace PrimaryDeviceConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration, TBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder<TRegistration>>() => PrimaryDeviceConfiguration<TRegistration, TBuilder>;
        }
    }
    function isPrimary(_this_: dk.cachet.carp.common.application.devices.DeviceConfiguration<any /*any*/, any /*any*/>): boolean;
}
export declare namespace dk.cachet.carp.common.application.devices {
    class Smartphone extends dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.devices.DefaultDeviceRegistration, dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean, defaultSamplingConfiguration?: kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>);
        get roleName(): string;
        get isOptional(): boolean;
        get defaultSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        getSupportedDataTypes(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.DefaultDeviceRegistrationBuilder;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.DefaultDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean, defaultSamplingConfiguration?: kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>): dk.cachet.carp.common.application.devices.Smartphone;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Smartphone {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Smartphone;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    create(roleName: string, builder: (p0: dk.cachet.carp.common.application.devices.SmartphoneBuilder) => void): dk.cachet.carp.common.application.devices.Smartphone;
                    private constructor();
                }
            }
        }
        abstract class Sensors extends KtSingleton<Sensors.$metadata$.constructor>() {
            private constructor();
        }
        namespace Sensors {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap.$metadata$.constructor {
                    get GEOLOCATION(): dk.cachet.carp.common.application.sampling.AdaptiveGranularitySamplingScheme;
                    get STEP_COUNT(): dk.cachet.carp.common.application.sampling.NoOptionsSamplingScheme;
                    get NON_GRAVITATIONAL_ACCELERATION(): dk.cachet.carp.common.application.sampling.IntervalSamplingScheme;
                    get ACCELERATION(): dk.cachet.carp.common.application.sampling.IntervalSamplingScheme;
                    get ANGULAR_VELOCITY(): dk.cachet.carp.common.application.sampling.IntervalSamplingScheme;
                    asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>>;
                    get size(): number;
                    get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
                    get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */;
                    get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */>;
                    private constructor();
                }
            }
        }
        abstract class Tasks extends KtSingleton<Tasks.$metadata$.constructor>() {
            private constructor();
        }
        namespace Tasks {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.tasks.TaskConfigurationList.$metadata$.constructor {
                    get WEB(): dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<dk.cachet.carp.common.application.tasks.WebTask, dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */, dk.cachet.carp.common.application.tasks.WebTaskBuilder>;
                    private constructor();
                }
            }
        }
    }
    class SmartphoneBuilder extends dk.cachet.carp.common.application.devices.DeviceConfigurationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.devices.SmartphoneSamplingConfigurationMapBuilder> {
        constructor();
        get isOptional(): boolean;
        set isOptional(value: boolean);
        protected createSamplingConfigurationMapBuilder(): dk.cachet.carp.common.application.devices.SmartphoneSamplingConfigurationMapBuilder;
    }
    namespace SmartphoneBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SmartphoneBuilder;
        }
    }
    class SmartphoneSamplingConfigurationMapBuilder /* extends dk.cachet.carp.common.application.sampling.SamplingConfigurationMapBuilder */ {
        constructor();
        geolocation(builder: (p0: dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration, dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder>) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        nonGravitationalAcceleration(builder: (p0: dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        acceleration(builder: (p0: dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
        angularVelocity(builder: (p0: dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder) => void): dk.cachet.carp.common.application.sampling.SamplingConfiguration;
    }
    namespace SmartphoneSamplingConfigurationMapBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SmartphoneSamplingConfigurationMapBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.devices {
    class Website extends dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration, dk.cachet.carp.common.application.devices.WebsiteDeviceRegistrationBuilder> {
        constructor(roleName: string, isOptional?: boolean);
        get roleName(): string;
        get isOptional(): boolean;
        getSupportedDataTypes(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        getDataTypeSamplingSchemes(): dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap;
        get defaultSamplingConfiguration(): kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
        protected createDeviceRegistrationBuilder(): dk.cachet.carp.common.application.devices.WebsiteDeviceRegistrationBuilder;
        isValidRegistration(registration: dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration): dk.cachet.carp.common.application.Trilean;
        copy(roleName?: string, isOptional?: boolean): dk.cachet.carp.common.application.devices.Website;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Website {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Website;
        }
        abstract class Sensors extends KtSingleton<Sensors.$metadata$.constructor>() {
            private constructor();
        }
        namespace Sensors {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.sampling.DataTypeSamplingSchemeMap.$metadata$.constructor {
                    asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>>;
                    get size(): number;
                    get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
                    get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */;
                    get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */>;
                    private constructor();
                }
            }
        }
        abstract class Tasks extends KtSingleton<Tasks.$metadata$.constructor>() {
            private constructor();
        }
        namespace Tasks {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.tasks.TaskConfigurationList.$metadata$.constructor {
                    private constructor();
                }
            }
        }
    }
    class WebsiteDeviceRegistration extends dk.cachet.carp.common.application.devices.DeviceRegistration.$metadata$.constructor {
        constructor(url: string, userAgent: string, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant);
        get url(): string;
        get userAgent(): string;
        get deviceDisplayName(): Nullable<string>;
        get additionalSpecifications(): Nullable<dk.cachet.carp.common.application.ApplicationData>;
        get registrationCreatedOn(): kotlin.time.Instant;
        get deviceId(): string;
        copy(url?: string, userAgent?: string, deviceDisplayName?: Nullable<string>, additionalSpecifications?: Nullable<dk.cachet.carp.common.application.ApplicationData>, registrationCreatedOn?: kotlin.time.Instant): dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace WebsiteDeviceRegistration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WebsiteDeviceRegistration;
        }
    }
    class WebsiteDeviceRegistrationBuilder extends dk.cachet.carp.common.application.devices.DeviceRegistrationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration> {
        constructor();
        get url(): string;
        set url(value: string);
        get userAgent(): string;
        set userAgent(value: string);
        build(): dk.cachet.carp.common.application.devices.WebsiteDeviceRegistration;
    }
    namespace WebsiteDeviceRegistrationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WebsiteDeviceRegistrationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class AdaptiveGranularitySamplingScheme extends dk.cachet.carp.common.application.sampling.BatteryAwareSamplingScheme.$metadata$.constructor<dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration, dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData);
        isValidBatteryLevelConfiguration(configuration: dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration): boolean;
    }
    namespace AdaptiveGranularitySamplingScheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdaptiveGranularitySamplingScheme;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    abstract class BatteryAwareSamplingScheme<TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration, TBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<TConfig> */> extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme.$metadata$.constructor<dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfigurationBuilder<TConfig, TBuilder>> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, builder: () => TBuilder, normal: TConfig, low: TConfig, critical?: Nullable<TConfig>);
        get normal(): TConfig;
        get low(): TConfig;
        get critical(): Nullable<TConfig>;
        protected createSamplingConfigurationBuilder(): dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfigurationBuilder<TConfig, TBuilder>;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
        abstract isValidBatteryLevelConfiguration(configuration: TConfig): boolean;
    }
    namespace BatteryAwareSamplingScheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration, TBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<TConfig> */>() => BatteryAwareSamplingScheme<TConfig, TBuilder>;
        }
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
    }
    namespace BatteryAwareSamplingConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration>() => BatteryAwareSamplingConfiguration<TConfig>;
        }
    }
    class BatteryAwareSamplingConfigurationBuilder<TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration, TBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<TConfig> */> /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.BatteryAwareSamplingConfiguration<TConfig>> */ {
        constructor(createBuilder: () => TBuilder, normal: TConfig, low: TConfig, critical: Nullable<TConfig>);
        batteryNormal(builder: (p0: TBuilder) => void): void;
        batteryLow(builder: (p0: TBuilder) => void): void;
        batteryCritical(builder: (p0: TBuilder) => void): void;
        allBatteryLevels(builder: (p0: TBuilder) => void): void;
    }
    namespace BatteryAwareSamplingConfigurationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TConfig extends dk.cachet.carp.common.application.sampling.SamplingConfiguration, TBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<TConfig> */>() => BatteryAwareSamplingConfigurationBuilder<TConfig, TBuilder>;
        }
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
    namespace DataTypeSamplingScheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TConfigBuilder extends unknown/* dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<any> */>() => DataTypeSamplingScheme<TConfigBuilder>;
        }
    }
    class DataTypeSamplingSchemeMap /* extends dk.cachet.carp.common.application.EnumObjectMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */ implements kotlin.collections.KtMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>> {
        constructor();
        asJsReadonlyMapView(): ReadonlyMap<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any /*any*/>>;
        get size(): number;
        get keys(): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
        get values(): any/* kotlin.collections.Collection<dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */;
        get entries(): kotlin.collections.KtSet<any/* kotlin.collections.KtMap.Entry<dk.cachet.carp.common.application.NamespacedId, dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme<any>> */>;
        readonly __doNotUseOrImplementIt: kotlin.collections.KtMap<any, any>["__doNotUseOrImplementIt"];
    }
    namespace DataTypeSamplingSchemeMap {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DataTypeSamplingSchemeMap;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class GranularitySamplingScheme extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme.$metadata$.constructor<dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, defaultGranularity: dk.cachet.carp.common.application.sampling.Granularity);
        get defaultGranularity(): dk.cachet.carp.common.application.sampling.Granularity;
        protected createSamplingConfigurationBuilder(): dk.cachet.carp.common.application.sampling.GranularitySamplingConfigurationBuilder;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    namespace GranularitySamplingScheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GranularitySamplingScheme;
        }
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
        static values(): [typeof dk.cachet.carp.common.application.sampling.Granularity.Detailed, typeof dk.cachet.carp.common.application.sampling.Granularity.Balanced, typeof dk.cachet.carp.common.application.sampling.Granularity.Coarse];
        static valueOf(value: string): dk.cachet.carp.common.application.sampling.Granularity;
        get name(): "Detailed" | "Balanced" | "Coarse";
        get ordinal(): 0 | 1 | 2;
    }
    namespace Granularity {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Granularity;
        }
    }
    class GranularitySamplingConfiguration implements dk.cachet.carp.common.application.sampling.SamplingConfiguration {
        constructor(granularity: dk.cachet.carp.common.application.sampling.Granularity);
        get granularity(): dk.cachet.carp.common.application.sampling.Granularity;
        copy(granularity?: dk.cachet.carp.common.application.sampling.Granularity): dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
    }
    namespace GranularitySamplingConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GranularitySamplingConfiguration;
        }
    }
    class GranularitySamplingConfigurationBuilder /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.GranularitySamplingConfiguration> */ {
        constructor(granularity: dk.cachet.carp.common.application.sampling.Granularity);
        get granularity(): dk.cachet.carp.common.application.sampling.Granularity;
        set granularity(value: dk.cachet.carp.common.application.sampling.Granularity);
    }
    namespace GranularitySamplingConfigurationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GranularitySamplingConfigurationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class IntervalSamplingScheme extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme.$metadata$.constructor<dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData, defaultMeasureInterval: kotlin.time.Duration, validOptions?: Nullable<kotlin.collections.KtSet<kotlin.time.Duration>>);
        get defaultMeasureInterval(): kotlin.time.Duration;
        get validOptions(): Nullable<kotlin.collections.KtSet<kotlin.time.Duration>>;
        protected createSamplingConfigurationBuilder(): dk.cachet.carp.common.application.sampling.IntervalSamplingConfigurationBuilder;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    namespace IntervalSamplingScheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IntervalSamplingScheme;
        }
    }
    class IntervalSamplingConfiguration implements dk.cachet.carp.common.application.sampling.SamplingConfiguration {
        constructor(interval: kotlin.time.Duration);
        get interval(): kotlin.time.Duration;
        copy(interval?: kotlin.time.Duration): dk.cachet.carp.common.application.sampling.IntervalSamplingConfiguration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
    }
    namespace IntervalSamplingConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IntervalSamplingConfiguration;
        }
    }
    class IntervalSamplingConfigurationBuilder /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<dk.cachet.carp.common.application.sampling.IntervalSamplingConfiguration> */ {
        private constructor();
        get interval(): kotlin.time.Duration;
        set interval(value: kotlin.time.Duration);
        get validOptions(): Nullable<kotlin.collections.KtSet<kotlin.time.Duration>>;
        nearestOption(interval: kotlin.time.Duration): kotlin.time.Duration;
    }
    namespace IntervalSamplingConfigurationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IntervalSamplingConfigurationBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.sampling {
    class NoOptionsSamplingScheme extends dk.cachet.carp.common.application.sampling.DataTypeSamplingScheme.$metadata$.constructor<typeof dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfigurationBuilder> {
        constructor(dataType: dk.cachet.carp.common.application.data.DataTypeMetaData);
        protected createSamplingConfigurationBuilder(): typeof dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfigurationBuilder;
        isValid(configuration: dk.cachet.carp.common.application.sampling.SamplingConfiguration): boolean;
    }
    namespace NoOptionsSamplingScheme {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NoOptionsSamplingScheme;
        }
    }
    abstract class NoOptionsSamplingConfiguration extends KtSingleton<NoOptionsSamplingConfiguration.$metadata$.constructor>() {
        private constructor();
    }
    namespace NoOptionsSamplingConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor implements dk.cachet.carp.common.application.sampling.SamplingConfiguration/*, kotlinx.serialization.internal.SerializerFactory */ {
                readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.sampling.SamplingConfiguration["__doNotUseOrImplementIt"];
                private constructor();
            }
        }
    }
    abstract class NoOptionsSamplingConfigurationBuilder extends KtSingleton<NoOptionsSamplingConfigurationBuilder.$metadata$.constructor>() {
        private constructor();
    }
    namespace NoOptionsSamplingConfigurationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor /* implements dk.cachet.carp.common.application.sampling.SamplingConfigurationBuilder<typeof dk.cachet.carp.common.application.sampling.NoOptionsSamplingConfiguration> */ {
                private constructor();
            }
        }
    }
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
    }
    namespace ApiVersion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ApiVersion;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    fromString(apiVersion: string): dk.cachet.carp.common.application.services.ApiVersion;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace dk.cachet.carp.common.application.services {
    interface ApplicationService<Self extends dk.cachet.carp.common.application.services.ApplicationService<Self, TIntegrationEvent>, in TIntegrationEvent extends unknown/* dk.cachet.carp.common.application.services.IntegrationEvent<Self> */> {
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.services.ApplicationService": unique symbol;
        };
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class BackgroundTask implements dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(name: string, measures?: kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>, description?: Nullable<string>, duration?: kotlin.time.Duration);
        get name(): string;
        get measures(): kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>;
        get description(): Nullable<string>;
        get duration(): kotlin.time.Duration;
        copy(name?: string, measures?: kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>, description?: Nullable<string>, duration?: kotlin.time.Duration): dk.cachet.carp.common.application.tasks.BackgroundTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.tasks.TaskConfiguration<any>["__doNotUseOrImplementIt"];
    }
    namespace BackgroundTask {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BackgroundTask;
        }
    }
    class BackgroundTaskBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.tasks.BackgroundTask> {
        constructor(duration?: kotlin.time.Duration);
        get duration(): kotlin.time.Duration;
        set duration(value: kotlin.time.Duration);
        build(name: string): dk.cachet.carp.common.application.tasks.BackgroundTask;
    }
    namespace BackgroundTaskBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BackgroundTaskBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class CustomProtocolTask implements dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(name: string, studyProtocol: string);
        get name(): string;
        get studyProtocol(): string;
        get description(): Nullable<string>;
        get measures(): kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>;
        copy(name?: string, studyProtocol?: string): dk.cachet.carp.common.application.tasks.CustomProtocolTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.tasks.TaskConfiguration<any>["__doNotUseOrImplementIt"];
    }
    namespace CustomProtocolTask {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CustomProtocolTask;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    abstract class Measure {
        private constructor();
    }
    namespace Measure {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Measure;
        }
        class DataStream extends dk.cachet.carp.common.application.tasks.Measure.$metadata$.constructor {
            constructor(type: dk.cachet.carp.common.application.NamespacedId, overrideSamplingConfiguration?: Nullable<dk.cachet.carp.common.application.sampling.SamplingConfiguration>);
            get type(): dk.cachet.carp.common.application.NamespacedId;
            get overrideSamplingConfiguration(): Nullable<dk.cachet.carp.common.application.sampling.SamplingConfiguration>;
            copy(type?: dk.cachet.carp.common.application.NamespacedId, overrideSamplingConfiguration?: Nullable<dk.cachet.carp.common.application.sampling.SamplingConfiguration>): dk.cachet.carp.common.application.tasks.Measure.DataStream;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace DataStream {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => DataStream;
            }
        }
        class TriggerData extends dk.cachet.carp.common.application.tasks.Measure.$metadata$.constructor {
            constructor(triggerId: number);
            get triggerId(): number;
            copy(triggerId?: number): dk.cachet.carp.common.application.tasks.Measure.TriggerData;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace TriggerData {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => TriggerData;
            }
        }
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    interface TaskConfiguration<TData extends dk.cachet.carp.common.application.data.Data> {
        readonly name: string;
        readonly measures: kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>;
        readonly description: Nullable<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.tasks.TaskConfiguration": unique symbol;
        };
    }
    function getAllExpectedDataTypes(_this_: dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>): kotlin.collections.KtSet<dk.cachet.carp.common.application.NamespacedId>;
    abstract class TaskConfigurationBuilder<TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>> {
        constructor();
        get measures(): kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>;
        set measures(value: kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        abstract build(name: string): TConfiguration;
    }
    namespace TaskConfigurationBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<any /*any*/>>() => TaskConfigurationBuilder<TConfiguration>;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class TaskConfigurationList implements kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<any /*any*/, any /*any*/, any /*any*/>> {
        private constructor();
        static create(): dk.cachet.carp.common.application.tasks.TaskConfigurationList;
        get BACKGROUND(): dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<dk.cachet.carp.common.application.tasks.BackgroundTask, dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */, dk.cachet.carp.common.application.tasks.BackgroundTaskBuilder>;
        protected add<TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<TData>, TData extends dk.cachet.carp.common.application.data.Data, TBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<TConfiguration>>(builder: () => TBuilder): dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<TConfiguration, TData, TBuilder>;
        asJsReadonlyArrayView(): ReadonlyArray<dk.cachet.carp.common.application.tasks.SupportedTaskConfiguration<any /*any*/, any /*any*/, any /*any*/>>;
        readonly __doNotUseOrImplementIt: kotlin.collections.KtList<any>["__doNotUseOrImplementIt"];
    }
    namespace TaskConfigurationList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TaskConfigurationList;
        }
    }
    class SupportedTaskConfiguration<TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<TData>, TData extends dk.cachet.carp.common.application.data.Data, TBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<TConfiguration>> {
        constructor(createBuilder: () => TBuilder);
        create(name: string, builder: (p0: TBuilder) => void): TConfiguration;
    }
    namespace SupportedTaskConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TConfiguration extends dk.cachet.carp.common.application.tasks.TaskConfiguration<TData>, TData extends dk.cachet.carp.common.application.data.Data, TBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder<TConfiguration>>() => SupportedTaskConfiguration<TConfiguration, TData, TBuilder>;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.tasks {
    class WebTask implements dk.cachet.carp.common.application.tasks.TaskConfiguration<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(name: string, url: string, description?: Nullable<string>, measures?: kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>);
        get name(): string;
        get url(): string;
        get description(): Nullable<string>;
        get measures(): kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>;
        constructUrl(participantId: dk.cachet.carp.common.application.UUID, studyDeploymentId: dk.cachet.carp.common.application.UUID, triggerId: number): string;
        copy(name?: string, url?: string, description?: Nullable<string>, measures?: kotlin.collections.KtList<dk.cachet.carp.common.application.tasks.Measure>): dk.cachet.carp.common.application.tasks.WebTask;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.tasks.TaskConfiguration<any>["__doNotUseOrImplementIt"];
    }
    namespace WebTask {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WebTask;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    private constructor();
                }
            }
        }
        abstract class UrlVariable {
            private constructor();
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
            static values(): [typeof dk.cachet.carp.common.application.tasks.WebTask.UrlVariable.PARTICIPANT_ID, typeof dk.cachet.carp.common.application.tasks.WebTask.UrlVariable.DEPLOYMENT_ID, typeof dk.cachet.carp.common.application.tasks.WebTask.UrlVariable.TRIGGER_ID];
            static valueOf(value: string): dk.cachet.carp.common.application.tasks.WebTask.UrlVariable;
            get name(): "PARTICIPANT_ID" | "DEPLOYMENT_ID" | "TRIGGER_ID";
            get ordinal(): 0 | 1 | 2;
            get pattern(): string;
        }
        namespace UrlVariable {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => UrlVariable;
            }
        }
    }
    class WebTaskBuilder extends dk.cachet.carp.common.application.tasks.TaskConfigurationBuilder.$metadata$.constructor<dk.cachet.carp.common.application.tasks.WebTask> {
        constructor();
        get url(): string;
        set url(value: string);
        build(name: string): dk.cachet.carp.common.application.tasks.WebTask;
    }
    namespace WebTaskBuilder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => WebTaskBuilder;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class ElapsedTimeTrigger extends dk.cachet.carp.common.application.triggers.TriggerConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        private constructor();
        get sourceDeviceRoleName(): string;
        get elapsedTime(): kotlin.time.Duration;
        get requiresPrimaryDevice(): boolean;
        static create(sourceDevice: dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any /*any*/, any /*any*/>, elapsedTime: kotlin.time.Duration): dk.cachet.carp.common.application.triggers.ElapsedTimeTrigger;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace ElapsedTimeTrigger {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ElapsedTimeTrigger;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class ManualTrigger extends dk.cachet.carp.common.application.triggers.TriggerConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        constructor(sourceDeviceRoleName: string, label: string, description?: Nullable<string>);
        get sourceDeviceRoleName(): string;
        get label(): string;
        get description(): Nullable<string>;
        get requiresPrimaryDevice(): boolean;
        copy(sourceDeviceRoleName?: string, label?: string, description?: Nullable<string>): dk.cachet.carp.common.application.triggers.ManualTrigger;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace ManualTrigger {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ManualTrigger;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    class ScheduledTrigger extends dk.cachet.carp.common.application.triggers.TriggerConfiguration.$metadata$.constructor<dk.cachet.carp.common.application.data.Data/* typeof dk.cachet.carp.common.application.data.NoData */> {
        private constructor();
        get sourceDeviceRoleName(): string;
        get time(): dk.cachet.carp.common.application.TimeOfDay;
        get recurrenceRule(): dk.cachet.carp.common.application.RecurrenceRule;
        get requiresPrimaryDevice(): boolean;
        static create(sourceDevice: dk.cachet.carp.common.application.devices.PrimaryDeviceConfiguration<any /*any*/, any /*any*/>, time: dk.cachet.carp.common.application.TimeOfDay, recurrenceRule: dk.cachet.carp.common.application.RecurrenceRule): dk.cachet.carp.common.application.triggers.ScheduledTrigger;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace ScheduledTrigger {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ScheduledTrigger;
        }
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
    }
    namespace TaskControl {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TaskControl;
        }
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
            static values(): [typeof dk.cachet.carp.common.application.triggers.TaskControl.Control.Start, typeof dk.cachet.carp.common.application.triggers.TaskControl.Control.Stop];
            static valueOf(value: string): dk.cachet.carp.common.application.triggers.TaskControl.Control;
            get name(): "Start" | "Stop";
            get ordinal(): 0 | 1;
        }
        namespace Control {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Control;
            }
        }
    }
}
export declare namespace dk.cachet.carp.common.application.triggers {
    abstract class TriggerConfiguration<TData extends dk.cachet.carp.common.application.data.Data> {
        constructor();
        get requiresPrimaryDevice(): boolean;
        abstract get sourceDeviceRoleName(): string;
    }
    namespace TriggerConfiguration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TData extends dk.cachet.carp.common.application.data.Data>() => TriggerConfiguration<TData>;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    interface AccountIdentity {
        readonly __doNotUseOrImplementIt: {
            readonly "dk.cachet.carp.common.application.users.AccountIdentity": unique symbol;
        };
    }
    namespace AccountIdentity {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    fromEmailAddress(emailAddress: string): dk.cachet.carp.common.application.users.EmailAccountIdentity;
                    fromUsername(username: string): dk.cachet.carp.common.application.users.UsernameAccountIdentity;
                    private constructor();
                }
            }
        }
    }
    class EmailAccountIdentity implements dk.cachet.carp.common.application.users.AccountIdentity {
        constructor(emailAddress: dk.cachet.carp.common.application.EmailAddress);
        get emailAddress(): dk.cachet.carp.common.application.EmailAddress;
        static create(emailAddress: string): dk.cachet.carp.common.application.users.EmailAccountIdentity;
        copy(emailAddress?: dk.cachet.carp.common.application.EmailAddress): dk.cachet.carp.common.application.users.EmailAccountIdentity;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.users.AccountIdentity["__doNotUseOrImplementIt"];
    }
    namespace EmailAccountIdentity {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmailAccountIdentity;
        }
    }
    class UsernameAccountIdentity implements dk.cachet.carp.common.application.users.AccountIdentity {
        constructor(username: dk.cachet.carp.common.application.users.Username);
        get username(): dk.cachet.carp.common.application.users.Username;
        static create(username: string): dk.cachet.carp.common.application.users.UsernameAccountIdentity;
        copy(username?: dk.cachet.carp.common.application.users.Username): dk.cachet.carp.common.application.users.UsernameAccountIdentity;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: dk.cachet.carp.common.application.users.AccountIdentity["__doNotUseOrImplementIt"];
    }
    namespace UsernameAccountIdentity {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsernameAccountIdentity;
        }
    }
}
export declare namespace dk.cachet.carp.common.application.users {
    abstract class AssignedTo {
        private constructor();
    }
    namespace AssignedTo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AssignedTo;
        }
        abstract class All extends KtSingleton<All.$metadata$.constructor>() {
            private constructor();
        }
        namespace All {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor extends dk.cachet.carp.common.application.users.AssignedTo.$metadata$.constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                    private constructor();
                }
            }
        }
        class Roles extends dk.cachet.carp.common.application.users.AssignedTo.$metadata$.constructor {
            constructor(roleNames: kotlin.collections.KtSet<string>);
            get roleNames(): kotlin.collections.KtSet<string>;
            copy(roleNames?: kotlin.collections.KtSet<string>): dk.cachet.carp.common.application.users.AssignedTo.Roles;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace Roles {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Roles;
            }
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
    }
    namespace ExpectedParticipantData {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ExpectedParticipantData;
        }
    }
    function hasNoConflicts(_this_: kotlin.collections.KtSet<dk.cachet.carp.common.application.users.ExpectedParticipantData>, exceptionOnConflict?: boolean): boolean;
}
export declare namespace dk.cachet.carp.common.application.users {
    abstract class ParticipantAttribute {
        private constructor();
        abstract get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
        getInputElement(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList): dk.cachet.carp.common.application.data.input.elements.InputElement<any /*any*/>;
        isValidInput<TInput>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, input: TInput): boolean;
        inputToData<TInput>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, input: TInput): Nullable<dk.cachet.carp.common.application.data.Data>;
        isValidData<TData extends Nullable<dk.cachet.carp.common.application.data.Data>>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, data: TData): boolean;
        dataToInput<TData extends Nullable<dk.cachet.carp.common.application.data.Data>>(registeredInputDataTypes: dk.cachet.carp.common.application.data.input.InputDataTypeList, data: TData): Nullable<any>;
    }
    namespace ParticipantAttribute {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ParticipantAttribute;
        }
        class DefaultParticipantAttribute extends dk.cachet.carp.common.application.users.ParticipantAttribute.$metadata$.constructor {
            constructor(inputDataType: dk.cachet.carp.common.application.NamespacedId);
            get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
            copy(inputDataType?: dk.cachet.carp.common.application.NamespacedId): dk.cachet.carp.common.application.users.ParticipantAttribute.DefaultParticipantAttribute;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace DefaultParticipantAttribute {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => DefaultParticipantAttribute;
            }
        }
        class CustomParticipantAttribute<T extends any> extends dk.cachet.carp.common.application.users.ParticipantAttribute.$metadata$.constructor {
            constructor(input: dk.cachet.carp.common.application.data.input.elements.InputElement<T>);
            get input(): dk.cachet.carp.common.application.data.input.elements.InputElement<T>;
            get inputDataType(): dk.cachet.carp.common.application.NamespacedId;
            copy(input?: dk.cachet.carp.common.application.data.input.elements.InputElement<T>): dk.cachet.carp.common.application.users.ParticipantAttribute.CustomParticipantAttribute<T>;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace CustomParticipantAttribute {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new <T extends any>() => CustomParticipantAttribute<T>;
            }
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
    }
    namespace ParticipantRole {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ParticipantRole;
        }
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
    }
    namespace Username {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Username;
        }
    }
}
export declare namespace dk.cachet.carp.common.domain {
    interface Snapshot<TAggregateRoot> {
        readonly id: dk.cachet.carp.common.application.UUID;
        readonly createdOn: kotlin.time.Instant;
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
    abstract class ApplicationServiceRequest<TService extends dk.cachet.carp.common.application.services.ApplicationService<TService, any /*any*/>, out TReturn> {
        constructor();
        abstract get apiVersion(): dk.cachet.carp.common.application.services.ApiVersion;
        abstract getResponseSerializer(): any/* kotlinx.serialization.KSerializer<TReturn> */;
        matchesServiceRequest(request: any/* kotlin.reflect.KCallable<any> */): boolean;
    }
    namespace ApplicationServiceRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <TService extends dk.cachet.carp.common.application.services.ApplicationService<TService, any /*any*/>, TReturn>() => ApplicationServiceRequest<TService, TReturn>;
        }
    }
}
export as namespace dk_cachet_carp_common_carp_common;