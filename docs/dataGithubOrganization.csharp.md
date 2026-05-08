# `dataGithubOrganization` Submodule <a name="`dataGithubOrganization` Submodule" id="@cdktn/provider-github.dataGithubOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganization <a name="DataGithubOrganization" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization github_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganization(Construct Scope, string Id, DataGithubOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig">DataGithubOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig">DataGithubOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetIgnoreArchivedRepos">ResetIgnoreArchivedRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetSummaryOnly">ResetSummaryOnly</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreArchivedRepos` <a name="ResetIgnoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetIgnoreArchivedRepos"></a>

```csharp
private void ResetIgnoreArchivedRepos()
```

##### `ResetSummaryOnly` <a name="ResetSummaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.resetSummaryOnly"></a>

```csharp
private void ResetSummaryOnly()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganization.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganization.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersAllowedRepositoryCreationType">MembersAllowedRepositoryCreationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.orgname">Orgname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.twoFactorRequirementEnabled">TwoFactorRequirementEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.users">Users</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedReposInput">IgnoreArchivedReposInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnlyInput">SummaryOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedRepos">IgnoreArchivedRepos</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnly">SummaryOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public IResolvable AdvancedSecurityEnabledForNewRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DefaultRepositoryPermission`<sup>Required</sup> <a name="DefaultRepositoryPermission" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.defaultRepositoryPermission"></a>

```csharp
public string DefaultRepositoryPermission { get; }
```

- *Type:* string

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotAlertsEnabledForNewRepositories"></a>

```csharp
public IResolvable DependabotAlertsEnabledForNewRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
public IResolvable DependabotSecurityUpdatesEnabledForNewRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.dependencyGraphEnabledForNewRepositories"></a>

```csharp
public IResolvable DependencyGraphEnabledForNewRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `MembersAllowedRepositoryCreationType`<sup>Required</sup> <a name="MembersAllowedRepositoryCreationType" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersAllowedRepositoryCreationType"></a>

```csharp
public string MembersAllowedRepositoryCreationType { get; }
```

- *Type:* string

---

##### `MembersCanCreateInternalRepositories`<sup>Required</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateInternalRepositories"></a>

```csharp
public IResolvable MembersCanCreateInternalRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanCreatePages`<sup>Required</sup> <a name="MembersCanCreatePages" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePages"></a>

```csharp
public IResolvable MembersCanCreatePages { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanCreatePrivatePages`<sup>Required</sup> <a name="MembersCanCreatePrivatePages" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivatePages"></a>

```csharp
public IResolvable MembersCanCreatePrivatePages { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanCreatePrivateRepositories`<sup>Required</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePrivateRepositories"></a>

```csharp
public IResolvable MembersCanCreatePrivateRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanCreatePublicPages`<sup>Required</sup> <a name="MembersCanCreatePublicPages" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicPages"></a>

```csharp
public IResolvable MembersCanCreatePublicPages { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanCreatePublicRepositories`<sup>Required</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreatePublicRepositories"></a>

```csharp
public IResolvable MembersCanCreatePublicRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanCreateRepositories`<sup>Required</sup> <a name="MembersCanCreateRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanCreateRepositories"></a>

```csharp
public IResolvable MembersCanCreateRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MembersCanForkPrivateRepositories`<sup>Required</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.membersCanForkPrivateRepositories"></a>

```csharp
public IResolvable MembersCanForkPrivateRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Orgname`<sup>Required</sup> <a name="Orgname" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.orgname"></a>

```csharp
public string Orgname { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public IResolvable SecretScanningEnabledForNewRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public IResolvable SecretScanningPushProtectionEnabledForNewRepositories { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TwoFactorRequirementEnabled`<sup>Required</sup> <a name="TwoFactorRequirementEnabled" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.twoFactorRequirementEnabled"></a>

```csharp
public IResolvable TwoFactorRequirementEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.users"></a>

```csharp
public StringMapList Users { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `WebCommitSignoffRequired`<sup>Required</sup> <a name="WebCommitSignoffRequired" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.webCommitSignoffRequired"></a>

```csharp
public IResolvable WebCommitSignoffRequired { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreArchivedReposInput`<sup>Optional</sup> <a name="IgnoreArchivedReposInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedReposInput"></a>

```csharp
public bool|IResolvable IgnoreArchivedReposInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SummaryOnlyInput`<sup>Optional</sup> <a name="SummaryOnlyInput" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnlyInput"></a>

```csharp
public bool|IResolvable SummaryOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreArchivedRepos`<sup>Required</sup> <a name="IgnoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.ignoreArchivedRepos"></a>

```csharp
public bool|IResolvable IgnoreArchivedRepos { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SummaryOnly`<sup>Required</sup> <a name="SummaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.summaryOnly"></a>

```csharp
public bool|IResolvable SummaryOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationConfig <a name="DataGithubOrganizationConfig" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    bool|IResolvable IgnoreArchivedRepos = null,
    bool|IResolvable SummaryOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#name DataGithubOrganization#name}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#id DataGithubOrganization#id}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.ignoreArchivedRepos">IgnoreArchivedRepos</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.summaryOnly">SummaryOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#name DataGithubOrganization#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#id DataGithubOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreArchivedRepos`<sup>Optional</sup> <a name="IgnoreArchivedRepos" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.ignoreArchivedRepos"></a>

```csharp
public bool|IResolvable IgnoreArchivedRepos { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}.

---

##### `SummaryOnly`<sup>Optional</sup> <a name="SummaryOnly" id="@cdktn/provider-github.dataGithubOrganization.DataGithubOrganizationConfig.property.summaryOnly"></a>

```csharp
public bool|IResolvable SummaryOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}.

---



