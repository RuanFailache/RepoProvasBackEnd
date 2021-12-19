"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var examEntity_1 = __importDefault(require("./examEntity"));
var teacherEntity_1 = __importDefault(require("./teacherEntity"));
var Subject = /** @class */ (function () {
    function Subject() {
    }
    Subject.prototype.getSubject = function () {
        return {
            id: this.id,
            name: this.name,
            exams: this.exams
        };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Subject.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Subject.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return examEntity_1["default"]; }, function (exam) { return exam.subject; }),
        __metadata("design:type", Array)
    ], Subject.prototype, "exams");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return teacherEntity_1["default"]; }, function (teacher) { return teacher.subjects; }),
        (0, typeorm_1.JoinTable)({
            name: 'subjects_teachers',
            joinColumn: {
                name: 'subject_id',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'teacher_id',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], Subject.prototype, "teachers");
    Subject = __decorate([
        (0, typeorm_1.Entity)('subjects')
    ], Subject);
    return Subject;
}());
exports["default"] = Subject;
